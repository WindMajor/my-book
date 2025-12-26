---
---
layout: home
title: 我的技术文档书
titleTemplate: 个人知识库
editLink: true
lastUpdated: true
---

<script setup>
import { data } from './data';
</script>

# 欢迎来到我的技术文档空间

这里记录了我的技术学习历程、实战经验和心得体会。

## 主要内容

- **学习笔记**：系统化的技术知识整理
- **实战案例**：项目开发中的经验总结  
- **问题解决**：遇到的技术难题和解决方案

## 快速导航

<div class="feature-grid">
  <a href="/guide/" class="feature-card">
    <h3>📚 学习指南</h3>
    <p>从基础到进阶的系统学习路径</p>
  </a>
  <a href="/examples/" class="feature-card">
    <h3>💻 代码示例</h3>
    <p>实用的代码片段和最佳实践</p>
  </a>
  <a href="/best-practices/" class="feature-card">
    <h3>⭐ 最佳实践</h3>
    <p>开发中的经验总结和规范</p>
  </a>
</div>

<style>
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.feature-card {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
---
