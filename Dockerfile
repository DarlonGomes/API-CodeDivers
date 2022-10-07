FROM node

WORKDIR /usr/src/

COPY . .

RUN npm i

RUN npx prisma generate

RUN npm run build 

EXPOSE 5000

CMD ["npm", "start"]