---
permalink: /
layout: home
excerpt: "Research on training, evaluating, and understanding modern LLM agents."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="home-introduction" aria-label="About Yiyou Sun">
  <div class="home-introduction__text">
    <p class="home-bio">I am currently a Postdoctoral Researcher in Prof. <a href="https://dawnsong.io/">Dawn Song</a>’s group at UC Berkeley. Before that, I earned my Ph.D. in Computer Sciences from the University of Wisconsin–Madison, advised by Prof. <a href="https://pages.cs.wisc.edu/~sharonli/">Sharon (Yixuan) Li</a>.</p>

    <p class="home-research-intro">My current research focuses on modern LLM agents’ training and evaluation philosophy:</p>
    <ul class="home-questions">
      <li><strong>Training.</strong> When can agents acquire genuinely new skills rather than sharpen what they already know?</li>
      <li><strong>Evaluation.</strong> How should we measure agents on out-of-distribution, long-horizon, and real-world tasks?</li>
    </ul>

    <nav class="home-links" aria-label="Profile links">
      <a href="mailto:sunyiyou@berkeley.edu">Email</a>
      <a href="https://scholar.google.com/citations?user=IKqlQo4AAAAJ&amp;hl=en">Google Scholar</a>
      <a href="https://github.com/sunyiyou">GitHub</a>
      <a href="https://x.com/YiyouSun" rel="me">X / Twitter</a>
      <a href="https://www.linkedin.com/in/yiyou-sun-2698b0102">LinkedIn</a>
    </nav>
  </div>

  <figure class="home-portrait">
    <img src="/images/photo.jpeg" alt="Portrait of Yiyou Sun" width="720" height="720">
    <figcaption>Berkeley, California</figcaption>
  </figure>
</section>

<section class="selected-research" aria-labelledby="selected-research-title">
  <header class="research-heading">
    <h2 id="selected-research-title">Selected First-authored Researches</h2>
  </header>

  <article class="work-item">
    <a class="work-figure work-figure--contain" href="https://agents-last-exam.org/" aria-label="Visit the Agents' Last Exam project website">
      <img src="/images/research/agents-last-exam.webp" alt="Agents’ Last Exam teaser showing its research domains and example professional workflows" width="1800" height="894" loading="eager">
    </a>
    <div class="work-copy">
      <p class="work-meta">2026 · Agent Evaluation</p>
      <h3>Agents’ Last Exam</h3>
      <p class="work-question">Can AI agents complete the kind of long-horizon work that creates real economic value?</p>
      <p>A living benchmark for professional workflows with verifiable outcomes. It spans 55 sub-industries and more than 1,500 tasks contributed by over 300 domain experts, evaluating whether an agent can deliver the work rather than merely answer a question about it.</p>
      <p class="work-note"><strong>Highlights:</strong> <a href="https://openai.com/index/gpt-5-6/">OpenAI’s GPT‑5.6 release</a>; 50+ media coverage; 100K+ downloads in one month.</p>
      <p class="work-links">
        <a href="https://agents-last-exam.org/">Project</a>
        <a href="https://arxiv.org/abs/2606.05405">Paper</a>
        <a href="https://github.com/rdi-berkeley/agents-last-exam">Code</a>
        <a href="https://agents-last-exam.org/leaderboard">Leaderboard</a>
        <a href="https://openai.com/index/gpt-5-6/">OpenAI coverage</a>
      </p>
    </div>
  </article>

  <article class="work-item">
    <a class="work-figure work-figure--contain" href="https://rdi.berkeley.edu/blog/rl-grokking-recipe" aria-label="Read the RL Grokking Recipe research blog">
      <img src="/images/research/rl-grokking.webp" alt="A learning curve showing a sudden grokking phase transition after a long exploration plateau" width="728" height="308" loading="lazy">
    </a>
    <div class="work-copy">
      <p class="work-meta">ICLR 2026 · Reinforcement Learning</p>
      <h3>RL Grokking Recipe</h3>
      <p class="work-question">How can reinforcement learning unlock algorithms that a base model cannot solve at all?</p>
      <p>DELTA isolates fully out-of-distribution coding families and reveals a striking phase transition: after a long near-zero-reward plateau, a staged reward recipe can push models from pass@K=0 to reliable solutions.</p>
      <p class="work-note"><strong>Highlights:</strong> ICLR 2026; featured by Berkeley RDI; covered by AI Era (新智元).</p>
      <p class="work-links">
        <a href="https://arxiv.org/abs/2509.21016">Paper</a>
        <a href="https://rdi.berkeley.edu/blog/rl-grokking-recipe">Research blog</a>
        <a href="https://github.com/sunblaze-ucb/rl-grok-recipe">Code</a>
        <a href="https://mp.weixin.qq.com/s/0yk3VEJrpXWTTnR15bB4Qg">Media coverage</a>
      </p>
    </div>
  </article>

  <article class="work-item">
    <a class="work-figure" href="https://allenai.org/blog/omega" aria-label="Read the OMEGA research blog at Ai2">
      <img src="/images/research/omega.webp" alt="OMEGA research graphic asking whether LLMs can reason outside the box in mathematics" width="1440" height="810" loading="lazy">
    </a>
    <div class="work-copy">
      <p class="work-meta">NeurIPS 2025 · Mathematical Reasoning</p>
      <h3>OMEGA</h3>
      <p class="work-question">Can LLMs reason outside the box in mathematics?</p>
      <p>A controlled benchmark that separates three kinds of generalization—exploratory, compositional, and transformative. Frontier models improve on harder familiar problems, but genuine strategy shifts remain elusive.</p>
      <p class="work-note"><strong>Highlights:</strong> NeurIPS 2025; featured by Ai2; covered by AI Era (新智元).</p>
      <p class="work-links">
        <a href="https://arxiv.org/abs/2506.18880">Paper</a>
        <a href="https://allenai.org/blog/omega">Research blog</a>
        <a href="https://x.com/nouhadziri/status/1937567606543716508">Announcement</a>
      </p>
    </div>
  </article>

  <article class="work-item">
    <a class="work-figure work-figure--contain" href="https://arxiv.org/abs/2504.12691" aria-label="Read Why and How LLMs Hallucinate">
      <img src="/images/research/hallucination.webp" alt="Diagram tracing hallucinated model outputs to competing subsequence associations" width="1600" height="496" loading="lazy">
    </a>
    <div class="work-copy">
      <p class="work-meta">NeurIPS 2025 · Mechanistic Understanding</p>
      <h3>Why and How LLMs Hallucinate</h3>
      <p class="work-question">A unified view of hallucination through subsequence associations.</p>
      <p>The framework explains hallucination as a competition between faithful and misleading associations encoded by a transformer. A tracing algorithm identifies causal subsequences across randomized contexts and connects them to evidence in the training corpus.</p>
      <p class="work-note"><strong>Highlights:</strong> NeurIPS 2025; theoretical framework and causal tracing; open-source code.</p>
      <p class="work-links">
        <a href="https://arxiv.org/abs/2504.12691">Paper</a>
        <a href="https://github.com/sunyiyou/SAT">Code</a>
      </p>
    </div>
  </article>
</section>

<footer class="home-footer">
  <p>For research discussions and collaborations, feel free to <a href="mailto:sunyiyou@berkeley.edu">get in touch</a>.</p>
</footer>
