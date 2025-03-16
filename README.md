# DADN-test
# install package for be
npm install @prisma/client@^6.5.0 bcryptjs@^3.0.2 body-parser@^1.20.3 cors@^2.8.5 dotenv@^16.4.7 express@^4.21.2 jsonwebtoken@^9.0.2 mailchecker@^6.0.17 morgan@^1.10.0 mysql2@^3.13.0 prisma@^6.5.0

npm install --save-dev jest@^29.7.0 nodemon@^3.1.9

# install package for fe 
npm install axios@^1.7.9 chart.js@^4.4.7 react@^18.3.1 react-chartjs-2@^5.3.0 react-dom@^18.3.1 react-icons@^5.4.0 react-paginate@^8.3.0 react-router-dom@^7.1.1 react-toastify@^11.0.2

npm install --save-dev @eslint/js@^9.17.0 @types/react@^18.3.18 @types/react-dom@^18.3.5 @vitejs/plugin-react@^4.3.4 autoprefixer@^10.4.20 eslint@^9.17.0 eslint-plugin-react@^7.37.2 eslint-plugin-react-hooks@^5.0.0 eslint-plugin-react-refresh@^0.4.16 globals@^15.14.0 postcss@^8.4.49 tailwindcss@^3.4.17 vite@^6.0.5

# connect database
cd .\be-DADN-watering-system\config\prisma\

npx prisma generate

# run server be
npm run start

# run fe
npm run dev