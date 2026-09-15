#!/bin/bash

set -e

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
LOCAL_URL="http://localhost:3000"

cd "$PROJECT_DIR"

if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  echo "Node.js is required. Install Node.js 20.9 or newer from https://nodejs.org/"
  read -r -p "Press Enter to close..."
  exit 1
fi

if [ ! -x "node_modules/.bin/next" ]; then
  echo "Installing the website dependencies..."
  npm ci
fi

echo "Starting Vertex Education at $LOCAL_URL"
echo "Press Control-C here when you want to stop the local website."

(
  until curl --silent --fail "$LOCAL_URL" >/dev/null 2>&1; do
    sleep 1
  done

  if command -v open >/dev/null 2>&1; then
    open "$LOCAL_URL"
  else
    echo "Open $LOCAL_URL in your browser."
  fi
) &

npm run dev
