import json
import csv
import requests
import twitter

import sys
result = [];
with open('data.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        result.append(row['Text'])
# r = requests.get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=DonaldJTrump");
api = twitter.Api(consumer_key='qfjwZPGrWnnhRU8m07Ke8pzDU',
                      consumer_secret='jbAGGZykl8BN3iwsND5NzMSVkfW7jIJS8e8AHaPAgqgKEBKLXt',
                      access_token_key='440496849-fuIqhqQrJ5FXpVQhSV2Kfq4lXCID3p7O067sK4qA',
                      access_token_secret='oRmq6c7FgeE18QY7itCc7gs8xlNfUFcui5J8whSqtnyXP')

statuses = api.GetUserTimeline(screen_name = 'realDonaldTrump', count = 2000);

for s in statuses:
    result.append(s.text)

with open('data.json', 'w') as outfile:
    json.dump(result, outfile)
