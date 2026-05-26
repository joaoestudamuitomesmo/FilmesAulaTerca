# Salve professor, se tiver vendo o bang aqui, tive a ideia de usar um .csv do IMDB, daí eu usei o gemini pra gerar um script em python que extraia e gere o dicionario pra mim

import csv
import json

arquivo_csv = "IMDB-Movie-Data.csv" 
arquivo_js = "filmes.js"

filmes_lista = []

try:
    with open(arquivo_csv, mode="r", encoding="utf-8") as csv_file:
        leitor_csv = csv.DictReader(csv_file)
        
        for linha in leitor_csv:
            try:
                if not linha.get("Title") or not linha.get("Year"):
                    continue
                
                filme = {
                    "titulo": linha["Title"].strip(),
                    "diretor": linha["Director"].strip(),
                    "ano": int(linha["Year"].strip()),  
                    "genero": linha["Genre"].strip()    
                }
                
                filmes_lista.append(filme)
                
            except ValueError:
                continue

    filmes_json = json.dumps(filmes_lista, indent=2, ensure_ascii=False)

    with open(arquivo_js, mode="w", encoding="utf-8") as js_file:
        js_file.write(f"const=(filmesDropdown) = {filmes_json};\n")

    print(f"Sucesso! {len(filmes_lista)} filmes foram processados e salvos em '{arquivo_js}'.")

except FileNotFoundError:
    print(f"Erro: O arquivo '{arquivo_csv}' não foi encontrado na mesma pasta do script.")