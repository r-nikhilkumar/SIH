import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn import linear_model, datasets
from sklearn.metrics import mean_squared_error, r2_score, confusion_matrix, accuracy_score, precision_score, recall_score
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier

data = pd.read_csv("dataset.csv")

# new_data= pd.get_dummies(data=data, columns=["Symptom_1","Symptom_2","Symptom_3","Symptom_4","Symptom_5","Symptom_6","Symptom_7","Symptom_8","Symptom_9","Symptom_10","Symptom_11","Symptom_12","Symptom_13","Symptom_14","Symptom_15","Symptom_16","Symptom_17"],dtype=int)
# new_data

ar = ["Symptom_1","Symptom_2","Symptom_3","Symptom_4","Symptom_5","Symptom_6","Symptom_7","Symptom_8","Symptom_9","Symptom_10","Symptom_11","Symptom_12","Symptom_13","Symptom_14","Symptom_15","Symptom_16","Symptom_17"]


y = []


for i in ar:
    dic = {}
    n = 1
    data[i].fillna(0, inplace=True)
    for k in data[i].unique():
        if(k==0):
            dic[k] = 0
        else:    
            dic[k] = n
            n+=1
    print(dic)
    k = eval(input())
    y.append(k)
print(y)
y = [y]
k = 0
s1 = data[ar[3]].unique()
for m in ar:
    j=1
    s = data[ar[k]].unique()
    d = {}
    data[ar[k]].fillna("0",inplace = True)
    for i in s:
        if(i==0):
            d[i]=0
            continue
        d[i] = j
        j+=1
    dic = {ar[k]:d}
    k+=1
    dic
    data.replace(dic, inplace=True)

X = data.drop("Disease", axis=1)
Y = data["Disease"]

x_train, x_test, y_train, y_test = train_test_split(X, Y, train_size=0.8)

model = RandomForestClassifier(criterion="entropy")

model.fit(x_train, y_train)

y_pred = model.predict(y)

# accuracy_score(y_test, y_pred)
print(y_pred)