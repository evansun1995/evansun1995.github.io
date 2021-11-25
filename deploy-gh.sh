#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
# set -e

git add -A
git commit -m 'update'
git push -f https://github.com/evansun1995/evansun1995.github.io.git  master

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/evansun1995/evansun1995.github.io.git  master:dist

# cd -
# 执行bash命令防止窗口自动关闭
exec /bin/bash
