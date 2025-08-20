---
title: 'Supercharge Your Python Workflow with UV'
description: 'A quick guide to using UV, the new, blazing-fast Python package installer and resolver.'
pubDate: 'Aug 20 2025'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

UV is a new, extremely fast Python package installer and resolver, written in Rust. It's designed to be a drop-in replacement for tools like `pip` and `pip-tools`. In this guide, we'll show you how to get started with UV.

## Installation

First, you need to install UV. You can do this using `pip`, or by using the standalone installers.

```bash
# Using pip
pip install uv

# Using curl
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## Creating a Virtual Environment

With UV, you can create a virtual environment using the `venv` command:

```bash
uv venv
```

This will create a new virtual environment in a `.venv` directory. To activate it, use the following command:

**macOS/Linux:**
```bash
source .venv/bin/activate
```

**Windows:**
```bash
.venv\Scripts\activate
```

## Installing Packages

To install packages, you can use the `pip install` command. For example, to install Flask:

```bash
uv pip install flask
```

UV can also install packages from a `requirements.txt` file:

```bash
uv pip install -r requirements.txt
```

## Conclusion

UV is a powerful tool that can significantly speed up your Python development workflow. It's still new, but it's already a very capable replacement for `pip`. Give it a try in your next project!
