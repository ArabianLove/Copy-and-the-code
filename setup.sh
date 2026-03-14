#!/bin/bash

sudo apt-get update
sudo apt-get install -y sl
grep -qxF 'export PATH=$PATH:/usr/games' ~/.bashrc || echo 'export PATH=$PATH:/usr/games' >> ~/.bashrc
export PATH=$PATH:/usr/games
