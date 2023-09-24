import numpy as np
import pandas as pd
from flask import Flask, jsonify
import datetime
from flask_cors import CORS
import matplotlib.pyplot as plt
from sklearn import linear_model, datasets
from sklearn.metrics import mean_squared_error, r2_score, confusion_matrix, accuracy_score, precision_score, recall_score
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier

def get_data(data1):
    app = Flask(__name__)
    CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})  # Replace with your React app's URL

    @app.route('/api/data',methods=['GET'])
# Returning an api for showing in  reactjs
    data2={"message":data1}
    return data2

   
data = pd.read_excel("Nikhil\Specialist.xlsx")
# data = data

# for i in col:
# col
    
X = data.drop("specialist", axis=1)
col = list(X.columns)
Y = data["specialist"]

x_train, x_test, y_train, y_test = train_test_split(X, Y, train_size=0.8)

model = RandomForestClassifier(criterion='entropy')

model.fit(x_train, y_train)
print(len(col))
arr = []

print("Tell me all the symptoms you have...")
for i in range(7):
    arr.append(input())
print(arr)
x_test_cust=[]
for i in col:
    if(i in arr):
       x_test_cust.append(1)
    else:
        x_test_cust.append(0)
print(x_test_cust) 
x_test_cust = [x_test_cust]
y_test_cust = [""]
y_predict = model.predict(x_test_cust)
print(y_predict)
get_data(y_predict[0])
# print(accuracy_score(y_test, y_predict))
if __name__=="__main__":
    app.run(debug=True)