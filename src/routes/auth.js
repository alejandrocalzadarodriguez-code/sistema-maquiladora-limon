const express = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const router = express.Router();
const SECRET = process.env.JWT_SECRET || 'clave_secreta_por_defecto';

// Registro (sin password, usando correo y rol)
router.post('/register', async (req, res) => {
  const { nombre, correo, rol, usuario_responsable } = req.body;

  try {
    const nuevoUsuario = await Usuario.create({
      nombre,
      correo,
      rol,
      usuario_responsable
    });

    res.status(201).json({ mensaje: 'Usuario registrado', usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario', detalle: error.message });
  }
});

// Login (solo por correo)
router.post('/login', async (req, res) => {
  const { correo } = req.body;

  try {
    const usuarioEncontrado = await Usuario.findOne({ where: { correo } });
    if (!usuarioEncontrado) return res.status(404).json({ error: 'Usuario no encontrado' });

    // Generamos token sin password
    const token = jwt.sign(
      { id: usuarioEncontrado.id_usuario, correo: usuarioEncontrado.correo, rol: usuarioEncontrado.rol },
      SECRET,
      { expiresIn: '1h' }
    );

    res.json({ mensaje: 'Login exitoso', token });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión', detalle: error.message });
  }
});

module.exports = router;