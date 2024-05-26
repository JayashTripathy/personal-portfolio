#!/bin/bash

if [ ! -d "components/icons" ]; then
    mkdir -p components/icons
fi

echo "$2" > "components/icons/$1"