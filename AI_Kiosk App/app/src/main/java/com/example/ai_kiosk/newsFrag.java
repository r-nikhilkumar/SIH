package com.example.ai_kiosk;

import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import com.google.android.material.progressindicator.LinearProgressIndicator;
import com.kwabenaberko.newsapilib.NewsApiClient;
import com.kwabenaberko.newsapilib.models.Article;
import com.kwabenaberko.newsapilib.models.request.TopHeadlinesRequest;
import com.kwabenaberko.newsapilib.models.response.ArticleResponse;

import java.util.ArrayList;
import java.util.List;

public class newsFrag extends Fragment {
    RecyclerView recyclerView;
    List<Article> articleList = new ArrayList<>();
    newAdapter adapter;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_news, container, false);
        recyclerView = view.findViewById(R.id.newsRecycle);


        news();
        setUp();
        return view;

    }

    void setUp(){
        recyclerView.setLayoutManager(new LinearLayoutManager(getContext()));
        adapter = new newAdapter(articleList);
        recyclerView.setAdapter(adapter);
    }

    void news(){
        NewsApiClient newsApiClient = new NewsApiClient("a03261e567fc46c2a1c7635bff0b9b1e");
        newsApiClient.getTopHeadlines(
                new TopHeadlinesRequest.Builder().language("en").category("health").build(),
                new NewsApiClient.ArticlesResponseCallback() {
                    @Override
                    public void onSuccess(ArticleResponse response) {
                        articleList = response.getArticles();
                        adapter.updateData(articleList);
                        adapter.notifyDataSetChanged();
                    }

                    @Override
                    public void onFailure(Throwable throwable) {
                        Log.i("Got Failure",throwable.getMessage());
                    }
                }
        );
    }
}