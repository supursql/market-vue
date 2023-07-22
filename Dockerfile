# 使用 node 14 作为基础镜像
FROM node:14

# 创建并设置工作目录
WORKDIR /app

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org 
# 复制 package.json 和 package-lock.json，先运行 npm install，以利用 Docker 缓存
COPY package*.json ./
RUN cnpm install

# 复制项目所有文件到工作目录
COPY . .

# 构建生产环境代码
RUN cnpm run build

# 暴露容器端口
EXPOSE 5173

# 运行命令
CMD [ "npm", "run", "dev" ]
