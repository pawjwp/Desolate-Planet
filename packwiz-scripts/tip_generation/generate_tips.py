import csv
import json
import os

os.makedirs("tips", exist_ok=True)

with open("tips.csv", newline="") as f:
    reader = csv.DictReader(f)
    rows = list(reader)

for row in rows:
    with open(f"tips/{row['TipName']}.json", "w") as f:
        json.dump({"tip": {"translate": f"desolate_planet.tip.{row['TipName']}"}}, f, indent=2)

with open("en_us.json", "w") as f:
    json.dump({f"desolate_planet.tip.{row['TipName']}": row['TipText'] for row in rows}, f, indent=2)