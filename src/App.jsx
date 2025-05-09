import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function BoardGameRentalApp() {
  const [jogos, setJogos] = useState([]);
  const [filtro, setFiltro] = useState("");

  const carregarJogos = async () => {
    const res = await fetch("http://34.95.206.231:3000/jogos");
    const data = await res.json();
    setJogos(data);
  };

  const alternarAluguel = async (id, novoStatus) => {
    await fetch(`http://34.95.206.231:3000/jogos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ alugado: novoStatus }),
    });
    carregarJogos();
  };

  useEffect(() => {
    carregarJogos();
  }, []);

  const jogosFiltrados = jogos.filter((jogo) =>
    jogo.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Aluguel de Board Games</h1>
      <div className="flex justify-center mb-6">
        <Input
          type="text"
          placeholder="Buscar por nome do jogo..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="w-full max-w-md"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jogosFiltrados.map((jogo) => (
          <Card key={jogo.id} className="bg-white shadow-md rounded-2xl p-4">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">{jogo.nome}</h2>
              <p className="mb-3">
                Status:{" "}
                <span className={jogo.alugado ? "text-red-500" : "text-green-600"}>
                  {jogo.alugado ? "Alugado" : "Disponível"}
                </span>
              </p>
              <Button onClick={() => alternarAluguel(jogo.id, !jogo.alugado)}>
                {jogo.alugado ? "Devolver" : "Alugar"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
