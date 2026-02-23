# 🤝 Contributing to This Project

Thank you for your interest in contributing!  
Please follow the steps below to maintain clean and professional workflow standards.

---

## 📌 Contribution Guidelines

- ✅ Always create a **feature branch**
- ❌ Do NOT push directly to `main`
- ✅ Write proper and meaningful commit messages
- ✅ Create a Pull Request (PR) with proper description

---

# 🔄 Contribution Workflow (Step-by-Step)

## 1️⃣ Fork the Repository

Click on the **Fork** button (top right corner of this repo).

This will create your own copy of the repository in your GitHub account.

---

## 2️⃣ Clone Your Forked Repository

```bash
git clone https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git
cd REPOSITORY-NAME
```

---

## 3️⃣ Add Original Repository as Upstream (Recommended)

```bash
git remote add upstream https://github.com/ORIGINAL-OWNER/REPOSITORY-NAME.git
```

To keep your fork updated:

```bash
git pull upstream main
```

---

## 4️⃣ Create a Feature Branch

⚠️ Never work directly on `main`.

```bash
git checkout -b feature/your-feature-name
```

Example:

```bash
git checkout -b feature/login-ui
```

---

## 5️⃣ Make Changes & Commit Properly

After making changes:

```bash
git add .
git commit -m "feat: add login page UI"
```

### 📌 Commit Message Format (Industry Standard)

Use Conventional Commits style:

- `feat:` → New feature
- `fix:` → Bug fix
- `docs:` → Documentation changes
- `refactor:` → Code restructuring
- `style:` → UI/formatting changes
- `test:` → Adding tests

Example:

```bash
git commit -m "fix: resolve navbar responsiveness issue"
```

---

## 6️⃣ Push Your Branch

```bash
git push origin feature/your-feature-name
```

---

## 7️⃣ Create a Pull Request (PR)

1. Go to your forked repository on GitHub
2. Click **Compare & Pull Request**
3. Add proper title and description

---

### 📄 Pull Request Template

**Title:**

```
feat: Add Login Page UI
```

**Description:**

```
### What does this PR do?
- Adds login form UI
- Adds validation
- Improves responsiveness

### Screenshots (if UI changes)
Attach screenshots here

### Related Issue
Closes #issue-number (if any)
```

---

# 📏 Code Standards

- Follow proper folder structure
- Write clean and readable code
- Avoid unnecessary console logs
- Use meaningful variable names
- Ensure no errors before submitting PR

---

# 🚨 Rules

- ❌ No direct push to `main`
- ❌ No large unrelated changes in one PR
- ✅ One feature = One PR
- ✅ Keep PR small and focused

---

# ⭐ Keep Your Fork Updated

Before creating a new PR:

```bash
git checkout main
git pull upstream main
git checkout feature/your-feature-name
git merge main
```

---

# 💡 Need Help?

If you have any doubts:

- Open an Issue
- Or contact the project maintainer

---

# 🎯 Goal

We aim to build a scalable and industry-level project with clean architecture and professional collaboration standards.

Happy Coding 🚀

---