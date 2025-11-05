const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'clave_secreta_por_defecto';

function verificarToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ error: 'Token requerido' });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido o expirado' });
  }
}

module.exports = verificarToken;