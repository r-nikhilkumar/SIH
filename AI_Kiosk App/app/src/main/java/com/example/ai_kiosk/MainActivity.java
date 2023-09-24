package com.example.ai_kiosk;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.biometric.BiometricManager;
import androidx.biometric.BiometricPrompt;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.core.content.ContextCompat;
import androidx.biometric.BiometricPrompt.PromptInfo;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.os.Bundle;
import android.view.MenuItem;
import android.widget.FrameLayout;
import android.widget.Toast;

import com.google.android.material.bottomnavigation.BottomNavigationView;

import java.util.concurrent.Executor;

public class MainActivity extends AppCompatActivity {

    androidx.biometric.BiometricPrompt biometricPrompt;
    PromptInfo promptInfo;
    BottomNavigationView btn ;
    FrameLayout frameLayout;
    ConstraintLayout mainlay;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mainlay = findViewById(R.id.mainlayout);
        btn = findViewById(R.id.bottomNavigationView);
        frameLayout = findViewById(R.id.mainFrame);

        FragmentManager fm    = getSupportFragmentManager();
        FragmentTransaction ft = fm.beginTransaction();
        ft.add(R.id.mainlayout,new newsFrag());

        BiometricManager biometricManager = androidx.biometric.BiometricManager.from(this);
        switch (biometricManager.canAuthenticate()){
            case BiometricManager.BIOMETRIC_ERROR_NO_HARDWARE:
                Toast.makeText(getApplicationContext(), "Device Doesn't have fingerprint", Toast.LENGTH_SHORT).show();
                break;
            case BiometricManager.BIOMETRIC_ERROR_HW_UNAVAILABLE:
                Toast.makeText(getApplicationContext(), "Not Working", Toast.LENGTH_SHORT).show();
                break;
            case BiometricManager.BIOMETRIC_ERROR_NONE_ENROLLED:
                Toast.makeText(getApplicationContext(), "No finger Assigned", Toast.LENGTH_SHORT).show();
                break;
        }

        Executor executor = ContextCompat.getMainExecutor(this);
        biometricPrompt = new BiometricPrompt(MainActivity.this, executor, new BiometricPrompt.AuthenticationCallback() {
            @Override
            public void onAuthenticationError(int errorCode, @NonNull CharSequence errString) {
                super.onAuthenticationError(errorCode, errString);
            }

            @Override
            public void onAuthenticationSucceeded(@NonNull BiometricPrompt.AuthenticationResult result) {
                super.onAuthenticationSucceeded(result);
                Toast.makeText(MainActivity.this, "You Have Successfully Logged In", Toast.LENGTH_SHORT).show();
            }

            @Override
            public void onAuthenticationFailed() {
                super.onAuthenticationFailed();
            }
        });
        promptInfo = new BiometricPrompt.PromptInfo.Builder().setTitle("AI Kiosk").setDescription("Use Fingerprint to login").setDeviceCredentialAllowed(true).build();
        biometricPrompt.authenticate(promptInfo);

        btn.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                int id = item.getItemId();
                if(id == R.id.timeline){
                    load(new timeline(),false);
                } else if (id == R.id.news) {
                    load(new newsFrag(),false);
                } else if(id == R.id.profile){
                    load(new profileFrag(),false);
                }
                return true;
            }
        });
        btn.setSelectedItemId(R.id.news);
    }
    public void load(Fragment frag,boolean v){
        FragmentManager fm    = getSupportFragmentManager();
        FragmentTransaction ft = fm.beginTransaction();
            ft.replace(R.id.mainlayout,frag);
        ft.commit();
    }
}