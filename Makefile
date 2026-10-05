up:
	docker compose up -d
install:
	npm install
setup:
	npm run db:generate
	npx prisma migrate dev --name init --schema=prisma/schema.prisma
	npx prisma db seed --schema=prisma/schema.prisma

dev:
	npm run dev
