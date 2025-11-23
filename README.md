# Greenthread E-Commerce Homepage (React)

This project is a React implementation of the **Greenthread** e-commerce homepage, completed as **Part 1** of *COMS W4170: User Interface Design (Fall 2025)*.  
The goal of this phase is to migrate a fully static HTML/CSS shopping homepage into a modern React application using reusable components, JSX, and data-driven rendering.

---

## 🌿 Overview

The homepage displays a responsive product grid built from a JSON data source.  
All UI sections—including the header, footer, and each product item—are implemented as React components.

This project emphasizes:
- Component-based design  
- Prop-driven rendering  
- Migrating static HTML/CSS to React  
- Dynamic image importing with `require()`  
- Structuring a foundational frontend codebase for later routing & cart functionality

---

## 🚀 Features

### **✔️ Header Component**
- Navigation bar  
- Logo  
- Icons (including cart icon using Boxicons)  
- Converted from static HTML to React with JSX-compliant syntax

### **✔️ ProductListing Component**
- Renders the entire product grid  
- Dynamically generates items using `map()`  
- Receives product data via props

### **✔️ ProductItem Component**
- Represents a single product card  
- Displays name, category, price, and image  
- Uses props for reusable rendering  
- Images loaded with `require()` to work in React

### **✔️ Footer Component**
- Fully migrated from HTML/CSS  
- Includes informational and social links

### **✔️ JSON-Driven Data**
Product details (name, category, price, images) are loaded from `products.json` and passed throughout the component hierarchy.

---

## 📁 Project Structure

