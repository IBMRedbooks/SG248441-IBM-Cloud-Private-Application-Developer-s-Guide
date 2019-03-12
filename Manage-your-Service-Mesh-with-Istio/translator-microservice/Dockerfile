#  Copyright 2018 IBM
#
#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.

FROM node:6.12.0-alpine

# Install the application
ADD package.json /app/package.json
RUN cd /app && npm install  
COPY /routes/* /app/routes/
COPY /services/* /app/services/
COPY /views/* /app/views/
ADD app.js /app/app.js
ENV WEB_PORT 80
EXPOSE  80


# Define command to run the application when the container starts
CMD ["node", "/app/app.js"] 
