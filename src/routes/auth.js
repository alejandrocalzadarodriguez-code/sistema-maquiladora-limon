const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const router = express.Router();
const SECRET = process.env.JWT_SECRET || 'clave_secreta_por_defecto';

// Registro
router.post('/register', async (req, res) => {
  const { nombre, usuario, password, rol } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = await Usuario.create({
      nombre,
      usuario,
      password: hashedPassword,
      rol
    });

    res.status(201).json({ mensaje: 'Usuario registrado', usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario', detalle: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { usuario, password } = req.body;

  try {
    const usuarioEncontrado = await Usuario.findOne({ where: { usuario } });
    if (!usuarioEncontrado) return res.status(404).json({ error: 'Usuario no encontrado' });

    const esValido = await bcrypt.compare(password, usuarioEncontrado.password);
    if (!esValido) return res.status(401).json({ error: 'Contraseña incorrecta' });

    const token = jwt.sign(
      { id: usuarioEncontrado.id, usuario: usuarioEncontrado.usuario, rol: usuarioEncontrado.rol },
      SECRET,
      { expiresIn: '1h' }
    );

    res.json({ mensaje: 'Login exitoso', token });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión', detalle: error.message });
  }
});

module.exports = router;