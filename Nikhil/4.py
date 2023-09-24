import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn import linear_model, datasets
from sklearn.metrics import mean_squared_error, r2_score, confusion_matrix, accuracy_score, precision_score, recall_score
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier

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
# y_test_cust = [""]

y_predict = model.predict(x_test_cust)
print(y_predict)
# print(accuracy_score(y_test, y_predict))