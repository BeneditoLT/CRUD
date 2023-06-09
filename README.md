<h1> # CRUD </h1>

<h2>Instalando dependências</h2>
Acesse a pasta ./api no terminal e execute:

npm install
Com isso instalamos as dependências Node que precisamos. Estou utilizando Node 10.

Construindo as imagens
Acesse a pasta raíz do projeto e construa cada imagem (MySQL, Node API e PHP):

```html
docker build -t mysql-image -f api/db/Dockerfile .
```
```html 
docker build -t node-image -f api/Dockerfile .
```
```html 
docker build -t php-image -f website/Dockerfile .
```
Rodando os containers
Na pasta raíz do projeto, execute um de cada vez:

```html 
background-color: blueviolet>docker run -d -v $(pwd)/api/db/data:/var/lib/mysql --rm --name mysql-container mysql-image
```

```html 
docker run -d -v $(pwd)/api:/home/node/app -p 9001:9001 --link mysql-container --rm --name node-container node-image 
```
```html 
docker run -d -v "$(pwd)/website":/var/www/html -p 8888:80 --link node-container --rm --name php-container php-image 
```
Agora faça o restore do banco:
```html
docker exec -i mysql-container mysql -uroot -pprogramadorabordo < api/db/script.sql 
```
