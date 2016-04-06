# IOT service app
# Version:  0.1

FROM     sashaz/nodecentos7
RUN      yum install -y git
WORKDIR /data/dev/
RUN 	git clone https://github.com/sashajeltuhin/IOT.git
WORKDIR /data/dev/IOT
RUN     git pull
RUN		npm update
EXPOSE	8033
CMD ["node", "app.js"]
