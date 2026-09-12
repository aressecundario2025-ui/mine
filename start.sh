#!/bin/bash

set -e

echo "========================================="
echo "🤖 DiDo Minecraft"
echo "========================================="
echo "Minecraft: 1.21.1"
echo "NeoForge"
echo "Pixelmon: 9.3.16"
echo "Jugador: DiDo"
echo "========================================="

GAME_DIR="/dido/minecraft"

mkdir -p "$GAME_DIR/mods"

cp /dido/mods/Pixelmon-1.21.1-9.3.16-universal.jar "$GAME_DIR/mods/"

echo "✅ Pixelmon copiado."

echo "⬇️ Descargando Minecraft 1.21.1..."
hmc download 1.21.1

echo "🔧 Instalando NeoForge..."
hmc neoforge 1.21.1

echo "🚀 Iniciando DiDo..."

hmc launch neoforge:1.21.1 
-lwjgl 
--gameDir "$GAME_DIR" 
--username "${MC_USERNAME:-DiDo}" 
--server "${MC_HOST:-pokemon-server.aternos.me}:${MC_PORT:-25565}"
