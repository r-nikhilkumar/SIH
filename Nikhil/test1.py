import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn import linear_model, datasets
from sklearn.metrics import mean_squared_error, r2_score, confusion_matrix, accuracy_score, precision_score, recall_score
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier

data = pd.read_csv("Nikhil\dataset.csv")

# new_data= pd.get_dummies(data=data, columns=["Symptom_1","Symptom_2","Symptom_3","Symptom_4","Symptom_5","Symptom_6","Symptom_7","Symptom_8","Symptom_9","Symptom_10","Symptom_11","Symptom_12","Symptom_13","Symptom_14","Symptom_15","Symptom_16","Symptom_17"],dtype=int)
# new_data

ar = ["Symptom_1","Symptom_2","Symptom_3","Symptom_4","Symptom_5","Symptom_6","Symptom_7","Symptom_8","Symptom_9","Symptom_10","Symptom_11","Symptom_12","Symptom_13","Symptom_14","Symptom_15","Symptom_16","Symptom_17"]

l = 0
unique_disease_set = set()
for m in ar:
    j=1
    data[ar[l]].fillna("nothing",inplace = True)
    s = data[ar[l]].unique()
    l+=1
    for i in s:
        unique_disease_set.add(i)
unique_disease_dict = {}
n=1
for i in unique_disease_set:
    if(i=="nothing"):
        unique_disease_dict[i] = 0
    else:
        unique_disease_dict[i] = n
        n+=1
# dict
k=0
for i in ar:
    data[i].replace(unique_disease_dict, inplace=True)
print(data)


X = data.drop("Disease", axis=1)
Y = data["Disease"]

x_train, x_test, y_train, y_test = train_test_split(X, Y, train_size=0.8)

model = RandomForestClassifier(criterion="entropy")

model.fit(x_train, y_train)

y_pred = model.predict(x_test)

print(accuracy_score(y_test, y_pred))
print(y_pred)