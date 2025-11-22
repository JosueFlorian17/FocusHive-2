#!/usr/bin/env python3
import os
import tkinter as tk
from tkinter import filedialog, messagebox
from datetime import datetime

# Carpetas a ignorar
IGNORE_DIRS = {
    ".git", "__pycache__", "venv", "env", "node_modules",
    "bin", "lib", ".mypy_cache", ".pytest_cache"
}

# Extensiones de archivos a ignorar (binarios, modelos, etc.)
IGNORE_EXTS = {
    ".bin", ".safetensors", ".h5", ".onnx", ".ot",
    ".pdf", ".png", ".jpg", ".jpeg", ".gif", ".mp4", ".zip"
}

MAX_ITEMS = 10  # máximo de archivos a mostrar por carpeta

def build_tree(root_dir, prefix=""):
    tree_str = ""
    try:
        items = sorted(os.listdir(root_dir))
    except PermissionError:
        return prefix + "└── [Permiso denegado]\n"

    # Filtrar carpetas y archivos ignorados
    items = [i for i in items if not (
        i in IGNORE_DIRS or 
        os.path.splitext(i)[1].lower() in IGNORE_EXTS
    )]

    for index, item in enumerate(items[:MAX_ITEMS]):
        path = os.path.join(root_dir, item)
        connector = "└── " if index == len(items[:MAX_ITEMS]) - 1 else "├── "
        tree_str += prefix + connector + item + "\n"
        if os.path.isdir(path):
            extension = "    " if index == len(items[:MAX_ITEMS]) - 1 else "│   "
            tree_str += build_tree(path, prefix + extension)

    # Si hay más elementos, indicarlo
    if len(items) > MAX_ITEMS:
        tree_str += prefix + "└── ... ({} más omitidos)\n".format(len(items) - MAX_ITEMS)

    return tree_str

def scan_folder():
    folder = filedialog.askdirectory(title="Selecciona la carpeta del proyecto")
    if not folder:
        return

    tree = build_tree(folder)

    # Mostrar en consola
    print("\n=== ÁRBOL DEL PROYECTO (resumido) ===\n")
    print(tree)

    # Guardar en archivo
    output_file = os.path.join(folder, f"project_tree_{datetime.now().strftime('%Y%m%d_%H%M%S')}.txt")
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(f"Árbol del proyecto: {folder}\n\n")
        f.write(tree)

    messagebox.showinfo("Escaneo completo", f"Árbol generado en:\n{output_file}")

def main():
    root = tk.Tk()
    root.withdraw()  # Ocultar ventana principal
    scan_folder()

if __name__ == "__main__":
    main()
