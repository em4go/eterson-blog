---
title: 'Potencia Tu Flujo de Trabajo de Python con UV'
description: 'Una guía rápida para usar UV, el nuevo y ultrarrápido instalador y resolutor de paquetes de Python.'
pubDate: 'Aug 20 2025'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

UV es un nuevo instalador y resolutor de paquetes de Python extremadamente rápido, escrito en Rust. Está diseñado para ser un reemplazo directo de herramientas como `pip` y `pip-tools`. En esta guía, te mostraremos cómo empezar a usar UV.

## Instalación

Primero, necesitas instalar UV. Puedes hacerlo usando `pip` o usando los instaladores independientes.

```bash
# Usando pip
pip install uv

# Usando curl
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## Creando un Entorno Virtual

Con UV, puedes crear un entorno virtual usando el comando `venv`:

```bash
uv venv
```

Esto creará un nuevo entorno virtual en un directorio `.venv`. Para activarlo, usa el siguiente comando:

**macOS/Linux:**
```bash
source .venv/bin/activate
```

**Windows:**
```bash
.venv\Scripts\activate
```

## Instalando Paquetes

Para instalar paquetes, puedes usar el comando `pip install`. Por ejemplo, para instalar Flask:

```bash
uv pip install flask
```

UV también puede instalar paquetes desde un archivo `requirements.txt`:

```bash
uv pip install -r requirements.txt
```

## Conclusión

UV es una herramienta poderosa que puede acelerar significativamente tu flujo de trabajo de desarrollo con Python. Todavía es nueva, pero ya es un reemplazo muy capaz para `pip`. ¡Pruébala en tu próximo proyecto!
