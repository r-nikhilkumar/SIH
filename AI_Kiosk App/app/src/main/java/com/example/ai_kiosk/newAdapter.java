package com.example.ai_kiosk;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.appcompat.view.menu.MenuView;
import androidx.recyclerview.widget.RecyclerView;

import com.kwabenaberko.newsapilib.models.Article;
import com.squareup.picasso.Picasso;

import java.util.ArrayList;
import java.util.List;

public class newAdapter extends RecyclerView.Adapter<newAdapter.news_Adapter>{

    List<Article> articleList;
    newAdapter(List<Article> articleList){
        this.articleList = articleList;
    }

    @NonNull
    @Override

    public news_Adapter onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.new_recycle,parent,false);
        return new news_Adapter(view);
    }

    @Override
    public void onBindViewHolder(@NonNull news_Adapter holder, int position) {
        Article article = articleList.get(position);
        holder.titleTextView.setText(article.getTitle());
        holder.sourceTextView.setText(article.getSource().getName());
        Picasso.get().load(article.getUrlToImage()).into(holder.imageView);

    }

    void updateData(List<Article> data){
        articleList.clear();
        articleList.addAll(data);
    }

    @Override
    public int getItemCount() {
        return articleList.size();
    }

    class news_Adapter extends RecyclerView.ViewHolder{
        TextView titleTextView ,sourceTextView;
        ImageView imageView;
        public news_Adapter(@NonNull View itemView) {
            super(itemView);
            imageView = itemView.findViewById(R.id.article_photo);
            sourceTextView = itemView.findViewById(R.id.article_src);
            titleTextView = itemView.findViewById(R.id.article_title);
        }

    }
}
