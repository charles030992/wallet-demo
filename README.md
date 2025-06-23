# ECDSA Wallet Demo

Proyecto educativo para comprender cómo funcionan las firmas digitales y la gestión de wallets en una blockchain tipo Ethereum.

## Características

- Generación de claves públicas y privadas usando `@noble/secp256k1`
- Transacciones seguras: solo el dueño de la clave privada puede mover fondos
- Verificación de firmas en el servidor antes de transferir saldo
- Conversión de claves públicas a direcciones Ethereum

## Instalación

git clone https://github.com/tu-usuario/ecdsa-wallet-demo.git
cd ecdsa-wallet-demo
npm install
cd client && npm install
cd ../server && npm install


## Uso

- Ejecuta el servidor: `cd server && npm run dev` o `nodemon index.js`
- Ejecuta el cliente: `cd client && npm run dev`
- Accede a `http://localhost:5173`

## Claves de prueba

Estas claves son solo para fines educativos y de prueba. **Nunca uses claves privadas reales en proyectos públicos.**

- Cuenta 1:
rivate key: 50d3aecc3e52ea594cdd387bbed3061e008800b08ac40ea869c2610afdc2dd94
Public key: 037c2d4f108f284b577b4c2f293c6c4dfcd532bb151fbd133dfa37e4f61decf586
Ethereum address: 0x68f75a129debbef2d97de6e7dc74df25061e2085

- Cuenta 2:
Private key: fe399cc2d8e2ba1859ad7531d8aa684c7bdcdc91463590e54a0d5224538e0f74
Public key: 035fb02f58273a1bbefaf07bee603969cf9433311462a63b43d703f4902fd35a92
Ethereum address: 0x0c4f5b0119b7e54f89ef0562efaae5019b19f26b

- Cuenta 3:
Private key: b3000e3ed9ac26707d369473274dd1807a471b66e91b9942d50df2da32d3894b
Public key: 02b3ca0dc93e4aaabf4caf0e08948bf7dbe34ecde75ea7123e9951e9a2261280d1
Ethereum address: 0x7955e9136461196042d0c0abcb302457752fcb2d

**Nota:** No uses estas claves fuera de este entorno de pruebas.

## Cambios realizados

- Sustitución de cuentas ficticias por claves públicas reales
- Implementación de firmas digitales en el front-end y verificación en el back-end
- Conversión de claves públicas a direcciones Ethereum
- Añadido control de seguridad para evitar transferencias no autorizadas

## Aviso

**No subas claves privadas reales a repositorios públicos. Estas claves son solo para pruebas y no contienen fondos reales.**
