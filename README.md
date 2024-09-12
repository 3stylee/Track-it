# Track It

Track it is a web application built using React, Typescript, Redux, Emotion Styled, and Bootstrap. It is powered by the free Strava API which allows users' to share their existing activity data. It uses firebase to store user data along with my own custom backend created using Node JS Express.

Track it allows middle-distance track runners to connect their existing Strava account and provides them with AI-powered insights into their training. The core of the application is the activity type prediction model. This model was trained on my existing data and automatically labels user's activities according to their training type (e.g. Tempo, Race, Session, Easy). 

By labelling users' activities, track allows them to search through their data by activity type, and provides extra insights into activities it knows to be the most important (sessions and races). Track it also incorporates a Named Entity Recognition model, which groups together sessions based on their titles to allow users to compare similar sessions quickly and easily to monitor their progression.
