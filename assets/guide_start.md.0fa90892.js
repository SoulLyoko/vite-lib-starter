import{_ as n,c as a,o as s,g as t}from"./app.fd53689f.js";const m='{"title":"Start","description":"","frontmatter":{"title":"Start"},"headers":[{"level":2,"title":"Install","slug":"install"},{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Full Import","slug":"full-import"},{"level":3,"title":"Manually import","slug":"manually-import"}],"relativePath":"guide/start.md"}',p={},o=t(`<div align="center"><h3>ViteLibStarter</h3><span>A template for building Vue components library</span><br><a href="https://soullyoko.github.io/vite-lib-starter/">Docs</a></div><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token function">npm</span> i vite-lib-starter
<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> vite-lib-starter
</code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="full-import" tabindex="-1">Full Import <a class="header-anchor" href="#full-import" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> LibStarter <span class="token keyword">from</span> <span class="token string">&quot;vite-lib-starter&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;vite-lib-starter/lib/style.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>LibStarter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// global config</span>
<span class="token comment">// app.use(LibStarter, { size: &quot;small&quot; });</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="volar-support" tabindex="-1">Volar Support <a class="header-anchor" href="#volar-support" aria-hidden="true">#</a></h4><p>Add the global component type definition for <code>Volar</code></p><div class="language-json"><pre><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vite-lib-starter/global&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="manually-import" tabindex="-1">Manually import <a class="header-anchor" href="#manually-import" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token comment">&lt;!-- App.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-button</span><span class="token punctuation">&gt;</span></span>VButton<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> VButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite-lib-starter&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token string">&quot;vite-lib-starter/lib/styles/button.css&quot;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,11),e=[o];function l(c,i,u,r,k,d){return s(),a("div",null,e)}var h=n(p,[["render",l]]);export{m as __pageData,h as default};
