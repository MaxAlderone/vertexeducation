#!/bin/bash
cd "$(dirname "$0")" || exit 1
npm run publish:site
PUBLISH_EXIT_CODE=$?
read -r -p "Press Enter to close..."
exit "$PUBLISH_EXIT_CODE"
