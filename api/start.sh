if [ "$DB_SEED" = "true" ]; then
    echo "is true"
    npm run seed
fi
npm run start