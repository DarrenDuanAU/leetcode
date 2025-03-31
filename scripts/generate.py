import os
import sys
import datetime

def slugify(text):
    return text.lower().replace(" ", "-").replace("'", "").replace("\"", "")

def pad_number(n):
    return str(n).zfill(4)

def generate_template(problem_number, title):
    today = datetime.date.today().strftime("%Y-%m-%d")
    slug = slugify(title)
    padded_number = pad_number(problem_number)
    folder_name = f"{padded_number}-{slug}"
    full_path = os.path.join("problems", folder_name)

    os.makedirs(full_path, exist_ok=True)

    # Generate solution.md (in English)
    md_path = os.path.join(full_path, "solution.md")
    with open(md_path, "w") as f:
        f.write(f"# {problem_number}. {title}\n\n")
        f.write(f"📅 Date: {today}\n\n")
        f.write("## ✅ Approach\n\n")
        f.write("_Describe your thought process and algorithm logic here._\n\n")
        f.write("## 📈 Complexity\n\n")
        f.write("- Time: O(?)\n")
        f.write("- Space: O(?)\n")

    # Generate solution.js
    js_path = os.path.join(full_path, "solution.js")
    with open(js_path, "w") as f:
        f.write(f"// LeetCode {problem_number}: {title}\n")
        f.write("// Your JavaScript solution here\n\n")
        f.write("function solve() {\n    // TODO\n}\n")

    print(f"✅ Template created: {full_path}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("❌ Usage: python generate.py <problem_number> \"<problem_title>\"")
        print("Example: python generate.py 1 \"Two Sum\"")
        sys.exit(1)

    problem_number = int(sys.argv[1])
    title = sys.argv[2]
    generate_template(problem_number, title)
