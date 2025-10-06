---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

You can also find articles on my <a href="https://scholar.google.com/citations?user=IKqlQo4AAAAJ&hl=en">Google Scholar profile</a>.

(The * indicates equal contribution, <sup>&dagger;</sup> indicates the mentoring role)

<!-- ## Publications -->

<style>
    @keyframes rgb {
        0%   { color: red; }
        33%  { color: green; }
        67%  { color: blue; }
        100% { color: red; }
    }

    .flashing-rgb {
        animation: rgb 2s infinite;
    }
    
    /* Filter buttons styling */
    .filter-container {
        margin: 20px 0 30px 0;
        padding: 15px;
        background: #f5f5f5;
        border-radius: 8px;
    }
    
    .filter-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 10px;
    }
    
    .filter-btn {
        padding: 8px 16px;
        border: 2px solid #007bff;
        background: white;
        color: #007bff;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.3s ease;
    }
    
    .filter-btn:hover {
        background: #e7f3ff;
    }
    
    .filter-btn.active {
        background: #007bff;
        color: white;
    }
    
    .publication-item {
        margin: 25px 0;
        transition: all 0.3s ease;
        padding-left: 160px; /* Space for tag + margin */
    }
    
    .publication-item.hidden {
        display: none;
    }
    
    /* Conference tag styling */
    .conference-tag {
        display: inline-block;
        padding: 4px 10px;
        margin-right: 10px;
        margin-left: -160px; /* Pull back to left edge */
        border-radius: 4px;
        font-size: 13px;
        font-weight: 600;
        color: white;
        background: #28a745;
        vertical-align: middle;
        min-width: 140px; /* Fixed width for consistency */
        text-align: center; /* Center text in tag */
    }
    
    .conference-tag.top-tier {
        background: #e36414;
    }
    
    .conference-tag.workshop {
        background: #6c757d;
    }
    
    .conference-tag.arxiv {
        background: #007bff;
    }
    
    .conference-tag.journal {
        background: #9c27b0;
    }
    
    /* Spotlight badge styling */
    .spotlight-badge {
        display: inline-block;
        padding: 3px 8px;
        margin-left: 0px;
        margin-right: 8px;
        border-radius: 3px;
        font-size: 11px;
        font-weight: 600;
        color: #fff;
        background: #ffc107;
        vertical-align: middle;
    }
    
    .spotlight-badge::before {
        content: "⭐ ";
    }

    /* Author name highlighting */
    .author-highlight {
        background-color: #dddddd;
        padding: 2px 4px;
        border-radius: 3px;
        font-weight: bold;
    }
    
    /* Publication link buttons */
    .pub-links {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 4px;
    }
    
    .pub-link {
        display: inline-flex;
        align-items: center;
        padding: 4px 12px;
        border-radius: 15px;
        font-size: 13px;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .pub-link:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        text-decoration: none;
        opacity: 0.8;
    }
    
    .pub-link.paper {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        color: #666;
        border: 1px solid rgba(102, 126, 234, 0.2);
    }

    .pub-link.code {
        background: linear-gradient(135deg, rgba(240, 147, 251, 0.1) 0%, rgba(245, 87, 108, 0.1) 100%);
        color: #666;
        border: 1px solid rgba(240, 147, 251, 0.2);
    }

    .pub-link.video {
        background: linear-gradient(135deg, rgba(250, 112, 154, 0.1) 0%, rgba(254, 225, 64, 0.1) 100%);
        color: #666;
        border: 1px solid rgba(250, 112, 154, 0.2);
    }

    .pub-link.poster {
        background: linear-gradient(135deg, rgba(48, 207, 208, 0.1) 0%, rgba(51, 8, 103, 0.1) 100%);
        color: #666;
        border: 1px solid rgba(48, 207, 208, 0.2);
    }

    .pub-link.slides {
        background: linear-gradient(135deg, rgba(168, 237, 234, 0.1) 0%, rgba(254, 214, 227, 0.1) 100%);
        color: #666;
        border: 1px solid rgba(168, 237, 234, 0.2);
    }

    .pub-link.webpage {
        background: linear-gradient(135deg, rgba(255, 154, 158, 0.1) 0%, rgba(254, 207, 239, 0.1) 100%);
        color: #666;
        border: 1px solid rgba(255, 154, 158, 0.2);
    }

    .pub-link.twitter {
        background: linear-gradient(135deg, rgba(29, 161, 242, 0.1) 0%, rgba(29, 161, 242, 0.05) 100%);
        color: #1DA1F2;
        border: 1px solid rgba(29, 161, 242, 0.3);
    }

    .pub-link.twitter:hover {
        background: linear-gradient(135deg, rgba(29, 161, 242, 0.15) 0%, rgba(29, 161, 242, 0.1) 100%);
    }
    
    .pub-link::before {
        margin-right: 5px;
        font-size: 14px;
    }
    
    .pub-link.paper::before {
        content: "📄";
    }
    
    .pub-link.code::before {
        content: "💻";
    }
    
    .pub-link.video::before {
        content: "🎥";
    }
    
    .pub-link.poster::before {
        content: "🖼️";
    }
    
    .pub-link.slides::before {
        content: "📊";
    }
    
    .pub-link.webpage::before {
        content: "🌐";
    }
    
    .pub-link.twitter::before {
        content: "🐦";
    }
</style>

<div class="filter-container">
    <h3 style="margin-top: 0;">Filter Publications by Category:</h3>
    <div class="filter-buttons">
        <button class="filter-btn active" data-filter="all">All Publications</button>
        <button class="filter-btn" data-filter="selected">Selected Publications</button>
        <button class="filter-btn" data-filter="first-author">First/Co-first Authored</button>
        <button class="filter-btn" data-filter="mentor">Mentor-role Publications</button>
        <button class="filter-btn" data-filter="llm">LLM Related Research</button>
        <button class="filter-btn" data-filter="ood-detection">OOD Detection (CNN)</button>
        <button class="filter-btn" data-filter="ood-learning">OOD Learning/Discovery (CNN)</button>
        <button class="filter-btn" data-filter="interpretability">Interpretability</button>
        <button class="filter-btn" data-filter="other">Other</button>
    </div>
</div>

<script src="{{ site.baseurl }}/assets/js/publications-filter.js"></script>





<div class="publication-item" data-tags="selected,first-author,llm">
  <span class="conference-tag arxiv">arxiv:2509.21016</span><b>RL Grokking Recipe: How Does RL Unlock and Transfer New Algorithms in LLMs?</b><br>
  <strong class="author-highlight">Yiyou Sun</strong>, Yuhan Cao, Pohao Huang, Haoyue Bai, Hannaneh Hajishirzi, Nouha Dziri, Dawn Song <br>
  <div class="pub-links">
    <a href="https://arxiv.org/abs/2509.21016" class="pub-link paper">Paper</a>
    <a href="https://rdi.berkeley.edu/blog/rl-grokking-recipe" class="pub-link webpage">Blog@BerkeleyRDI</a>
    <a href="https://x.com/nouhadziri/status/1973457440294445165" class="pub-link twitter" target="_blank">Twitter (❤️ 1K)</a>
  </div>
</div>

<div class="publication-item" data-tags="first-author,mentor,llm">
  <span class="conference-tag arxiv">arxiv:2507.21017</span><b>MIRAGE-Bench: LLM Agent is Hallucinating and Where to Find Them</b><br>
  W Zhang*, <strong class="author-highlight">Yiyou Sun*</strong>, Pohao Huang, Jiayue Pu, Heyue Lin, Dawn Song <br>
  <div class="pub-links">
    <a href="https://arxiv.org/abs/2507.21017" class="pub-link paper">Paper</a>
  </div>
</div>

<div class="publication-item" data-tags="selected,first-author,llm">
  <span class="conference-tag top-tier">NeurIPS'25</span><b>OMEGA: Can LLMs Reason Outside the Box in Math? Evaluating Exploratory, Compositional, and Transformative Generalization</b><br>
  <strong class="author-highlight">Yiyou Sun</strong>, Shawn Hu, Georgia Zhou, Ken Zheng, Hannaneh Hajishirzi, Nouha Dziri, Dawn Song <br>
  <div class="pub-links">
  <a href="https://arxiv.org/abs/2506.18880" class="pub-link paper">Paper</a>
  <a href="https://allenai.org/blog/omega" class="pub-link webpage">Blog@AI2</a>
  <a href="https://x.com/nouhadziri/status/1937567606543716508" class="pub-link twitter" target="_blank">Twitter (❤️ 700)</a>
  </div>
</div>

<div class="publication-item" data-tags="selected,first-author,llm">
  <span class="conference-tag top-tier">NeurIPS'25</span><b>Why and how llms hallucinate: Connecting the dots with subsequence associations</b><br>
  <strong class="author-highlight">Yiyou Sun</strong>, Yugai Gai, Lijie Chen, Abhilasha Ravichander, Yejin Choi, Dawn Song <br>
  <div class="pub-links">
  <a href="https://arxiv.org/abs/2504.12691" class="pub-link paper">Paper</a>
  </div>
</div>

<div class="publication-item" data-tags="first-author,llm">
  <span class="conference-tag arxiv">arxiv:2504.11741</span><b>Climbing the Ladder of Reasoning: What LLMs Can-and Still Can't-Solve after SFT?</b><br>
  <strong class="author-highlight">Yiyou Sun</strong>, Georgia Zhou, Hao Wang, Dacheng Li, Nouha Dziri, Dawn Song <br>
  <div class="pub-links">
    <a href="https://arxiv.org/abs/2504.11741" class="pub-link paper">Paper</a>
  </div>
</div>

<div class="publication-item" data-tags="llm">
  <span class="conference-tag arxiv">arxiv:2501.03491</span><b>Can LLMs Design Good Questions Based on Context?</b><br>
  Yueheng Zhang, Xiaoyuan Liu, <strong class="author-highlight">Yiyou Sun</strong>, Atheer Alharbi, Hend Alzahrani, Basel Alomair, Dawn Song <br>
  <div class="pub-links">
    <a href="https://arxiv.org/abs/2501.03491" class="pub-link paper">Paper</a>
  </div>
</div>


<div class="publication-item" data-tags="llm">
  <span class="conference-tag top-tier">ACL'25</span><b>SAUP: Situation Awareness Uncertainty Propagation on LLM Agent</b><br>
  Qiwei Zhao, Xujiang Zhao, Yanchi Liu, Wei Cheng, <strong class="author-highlight">Yiyou Sun</strong>, Mika Oishi, Takao Osaki, Katsushi Matsuda, Huaxiu Yao, Haifeng Chen
</div>

<div class="publication-item" data-tags="mentor,llm">
  <span class="conference-tag top-tier">CVPR'25</span><b>Where's the liability in the Generative Era? Recovery-based Black-Box Detection of AI-Generated Content</b><br>
  Haoyue Bai,  <strong class="author-highlight">Yiyou Sun<sup>&dagger;</sup></strong>, Wei Cheng, Haifeng Chen <br>
  <div class="pub-links">
    <a href="https://arxiv.org/abs/2505.01008" class="pub-link paper">Paper</a>
  </div>
</div>

<div class="publication-item" data-tags="first-author,llm">
  <span class="conference-tag top-tier">ICLR'25</span><b>Chain-of-region: Visual Language Models Need Details for Diagram Analysis</b><br>
  Xue Li*, <strong class="author-highlight">Yiyou Sun*</strong>, Wei Cheng, Yinglun Zhu, Haifeng Chen <br>
  <div class="pub-links">
    <a href="https://openreview.net/forum?id=M6fYrICcQs" class="pub-link paper">Paper</a>
  </div>
</div>




<div class="publication-item" data-tags="llm">
  <span class="conference-tag top-tier">ICLR'25</span><b>Scattered Forest Search: Smarter Code Space Exploration with LLMs</b><br>
  Jonathan Light, Yue Wu, <strong class="author-highlight">Yiyou Sun</strong>, Wenchao Yu, Yanchi Liu, Xujiang Zhao, Ziniu Hu, Haifeng Chen, Wei Cheng <br>
  <div class="pub-links">
    <a href="https://openreview.net/pdf?id=MCHuGOkExF" class="pub-link paper">Paper</a>
  </div>
</div>





<div class="publication-item" data-tags="first-author,mentor,ood-detection">
  <span class="conference-tag top-tier">NeurIPS'24</span><b>Revisiting Score Propagation in Graph Out-of-Distribution Detection</b><br>
  Longfei Ma*, <strong class="author-highlight">Yiyou Sun*<sup>&dagger;</sup></strong>, Kaize Ding, Zemin Liu, Fei Wu <br>
  <div class="pub-links">
    <a href="https://openreview.net/pdf?id=jb5qN3212b" class="pub-link paper">Paper</a>
  </div>
</div>





<div class="publication-item" data-tags="llm">
  <span class="conference-tag top-tier">NeurIPS'24</span><b>Improving Logits-based Detector without Logits from Black-box LLMs</b><br>
  Cong Zeng, Shengkun Tang, Xianjun Yang, Yuanzhou Chen, <strong class="author-highlight">Yiyou Sun</strong>, zhiqiang xu, Yao Li, Haifeng Chen, Wei Cheng, Dongkuan Xu <br>
  <div class="pub-links">
    <a href="https://arxiv.org/pdf/2406.05232" class="pub-link paper">Paper</a>
  </div>
</div>





<!-- <span class="flashing-rgb">(NEW!) </span> -->

<div class="publication-item" data-tags="first-author,llm">
  <span class="conference-tag top-tier">ICML'24</span><b>Chatbot Meets Pipeline: Augment Large Language Model with Definite Finite Automaton</b><br>
  <strong class="author-highlight">Yiyou Sun</strong>, Junjie Hu, Wei Cheng, Haifeng Chen <br>
  <div class="pub-links">
    <a href="https://arxiv.org/pdf/2402.04411" class="pub-link paper">Paper</a>
  </div>
</div>





<div class="publication-item" data-tags="ood-detection">
  <span class="conference-tag top-tier">ICML'24</span><b>When and How Does In-Distribution Label Help Out-of-Distribution Detection?</b><br>
  Xuefeng Du, <strong class="author-highlight">Yiyou Sun</strong>, Yixuan Li <br>
  <!-- [<a href="https://arxiv.org/pdf/2402.04411">Arxiv</a>] -->
</div>





<div class="publication-item" data-tags="llm">
  <span class="conference-tag">NAACL'24</span><b>Uncertainty Decomposition and Quantification for In-Context Learning of Large Language Models</b><br>
Chen Ling, Xujiang Zhao, Xuchao Zhang, Wei Cheng, Yanchi Liu, <strong class="author-highlight">Yiyou Sun</strong>, Mika Oishi, Takao Osaki, Katsushi Matsuda, Jie Ji, Guangji Bai, Liang Zhao, Haifeng Chen
  <br>
  <div class="pub-links">
    <a href="https://arxiv.org/abs/2402.10189" class="pub-link paper">Paper</a>
  </div>
</div>





<div class="publication-item" data-tags="first-author,ood-detection">
  <span class="conference-tag">AAAI'24</span><b>How to Overcome Curse-of-Dimensionality for OOD Detection?</b><br>
  Soumya Suvra Ghosal*, <strong class="author-highlight">Yiyou Sun*</strong>, Yixuan Li <br>
</div>




<div class="publication-item" data-tags="selected,first-author,ood-learning">
  <span class="conference-tag top-tier">NeurIPS'23</span><span class="spotlight-badge">Spotlight</span><b>A Graph-Theoretic Framework for Understanding Open-World Representation Learning</b><br>
  <strong class="author-highlight">Yiyou Sun</strong>, Zhenmei Shi, Yixuan Li <br>
  <div class="pub-links">
    <a href="https://openreview.net/pdf?id=ZITOHWeAy7" class="pub-link paper">Paper</a>
    <a href="https://github.com/deeplearning-wisc/SORL" class="pub-link code">Code</a>
  </div>
</div>




<div class="publication-item" data-tags="ood-detection">
  <span class="conference-tag top-tier">NeurIPS'23</span><b>Dream the Impossible: Outlier Imagination with Diffusion Models</b><br>
  Xuefeng Du, <strong class="author-highlight">Yiyou Sun</strong>, Xiaojin Zhu, Yixuan Li <br>
  <div class="pub-links">
    <a href="https://arxiv.org/pdf/2309.13415" class="pub-link paper">Paper</a>
    <a href="https://github.com/deeplearning-wisc/dream-ood" class="pub-link code">Code</a>
  </div>
</div>




<div class="publication-item" data-tags="selected,first-author,ood-learning">
  <span class="conference-tag top-tier">ICML'23</span><b>When and How Does Known Class Help Discover Unknown Ones? Provable Understandings Through Spectral Analysis</b><br>
  <strong class="author-highlight">Yiyou Sun</strong>, Zhenmei Shi, Yingyu Liang, Yixuan Li <br>
  <div class="pub-links">
    <a href="https://openreview.net/pdf?id=JHodnaW5WZ" class="pub-link paper">Paper</a>
    <a href="https://github.com/deeplearning-wisc/NSCL" class="pub-link code">Code</a>
    <a href="https://www.youtube.com/watch?v=21_P-Qrq7q4" class="pub-link video">Video</a>
  </div>
</div>



<div class="publication-item media-body" data-tags="first-author,other">
  <span class="conference-tag top-tier">CVPR'23</span><b>Rethinking Domain Generalization for Face Anti-spoofing: Separability and Alignment</b><br>
  <strong class="author-highlight">Yiyou Sun</strong>, Yaojie Liu, Xiaoming Liu, Yixuan Li, Wen-Sheng Chu <br>
  <div class="pub-links">
    <a href="http://arxiv.org/abs/2303.13662" class="pub-link paper">Paper</a>
    <a href="https://github.com/sunyiyou/SAFAS" class="pub-link code">Code</a>
  </div>
</div>



<div class="publication-item media-body" data-tags="first-author,ood-learning">
  <span class="conference-tag journal">TMLR'23</span><b>OpenCon: Open-world Contrastive Learning</b><br>
    <strong class="author-highlight">Yiyou Sun</strong>, Yixuan (Sharon) Li<br>
  <div class="pub-links">
    <a href="https://arxiv.org/abs/2208.02764" class="pub-link paper">Paper</a>
    <a href="https://github.com/deeplearning-wisc/opencon" class="pub-link code">Code</a>
  </div>
</div>  




<div class="publication-item media-body" data-tags="ood-detection">
  <span class="conference-tag top-tier">ICLR'23</span><b>How to Exploit Hyperspherical Embeddings for Out-of-Distribution Detection?</b><br>
  Yifei Ming, <strong class="author-highlight">Yiyou Sun</strong>, Ousmane Dia, Yixuan (Sharon) Li<br>
  <div class="pub-links">
    <a href="https://arxiv.org/abs/2203.04450" class="pub-link paper">Paper</a>
  </div>
</div>




<div class="publication-item media-body" data-tags="first-author,ood-detection">
    <span class="conference-tag top-tier">ICML'22</span><b>Out-of-distribution Detection with Deep Nearest Neighbors</b><br>
      <strong class="author-highlight">Yiyou Sun</strong>, Yifei Ming, Xiaojin Zhu, Yixuan (Sharon) Li<br>
  <div class="pub-links">
    <a href="https://arxiv.org/abs/2204.06507" class="pub-link paper">Paper</a>
    <a href="https://github.com/deeplearning-wisc/knn-ood" class="pub-link code">Code</a>
    <a href="/paper/knn.pdf" class="pub-link slides">Slides</a>
    <a href="https://x.com/YiyouSun/status/1548463892719759362" class="pub-link twitter" target="_blank">Twitter (❤️ 600)</a>
  </div>
</div>



<div class="publication-item media-body" data-tags="first-author,ood-detection">
    <span class="conference-tag top-tier">ECCV'22</span><b>DICE: Leveraging Sparsification for Out-of-Distribution Detection</b><br>
      <strong class="author-highlight">Yiyou Sun</strong>, Yixuan (Sharon) Li<br>
  <div class="pub-links">
    <a href="https://arxiv.org/abs/2111.09805" class="pub-link paper">Paper</a>
    <a href="https://github.com/deeplearning-wisc/dice.git" class="pub-link code">Code</a>
    <a href="/paper/4405.pdf" class="pub-link poster">Poster</a>
    <a href="/paper/4405.mp4" class="pub-link video">Video</a>
  </div>
</div>




<div class="publication-item media-body" data-tags="selected,first-author,ood-detection">
    <span class="conference-tag top-tier">NeurIPS'21</span><b>ReAct: Out-of-distribution Detection With Rectified Activations</b><br>
      <strong class="author-highlight">Yiyou Sun</strong>, Chuan Guo, Yixuan (Sharon) Li<br>
  <div class="pub-links">
    <a href="http://arxiv.org/abs/2111.12797" class="pub-link paper">Paper</a>
    <a href="https://github.com/deeplearning-wisc/react.git" class="pub-link code">Code</a>
    <a href="/paper/react.pdf" class="pub-link slides">Slides</a>
  </div>
</div>


 


<div class="publication-item media-body" data-tags="ood-detection">
    <span class="conference-tag top-tier">NeurIPS'22</span><b>Delving into OOD Detection with Vision-Language Representations</b><br>
    Yifei Ming, Ziyang Cai, Jiuxiang Gu, <strong class="author-highlight">Yiyou Sun</strong>, Wei Li, Yixuan (Sharon) Li<br>
  <div class="pub-links">
    <a href="https://openreview.net/pdf?id=KnCS9390Va" class="pub-link paper">Paper</a>
  </div>
</div>





<div class="publication-item media-body" data-tags="ood-detection">
  <span class="conference-tag top-tier">NeurIPS'22</span><b>OpenOOD: Benchmarking Generalized
Out-of-Distribution Detection</b> (Datasets and Benchmarks Track)<br>
  Jingkang Yang, Pengyun Wang, Dejian Zou, Zitang Zhou, Kunyuan Ding, Wenxuan Peng, Haoqi Wang, Guangyao Chen, Bo Li, <strong class="author-highlight">Yiyou Sun</strong>, Xuefeng Du, Kaiyang Zhou, Wayne Zhang, Dan Hendrycks, Yixuan (Sharon) Li, Ziwei Liu<br>
  <div class="pub-links">
    <a href="https://openreview.net/pdf?id=gT6j4_tskUt" class="pub-link paper">Paper</a>
    <a href="https://github.com/Jingkang50/OpenOOD" class="pub-link code">Code</a>
  </div>
</div>


<div class="publication-item media-body" data-tags="first-author,interpretability">
    <span class="conference-tag top-tier">ICCV'19</span><b>Adaptive Activation Thresholding: Dynamic Routing Type Behavior for Interpretability in Convolutional Neural Networks</b><br>
      <strong class="author-highlight">Yiyou Sun</strong>, Sathya Ravi, Vikas Singh<br>
  <div class="pub-links">
    <a href="/paper/dka.pdf" class="pub-link paper">Paper</a>
    <a href="/paper/dka_supp/index.html" class="pub-link webpage">Webpage</a>
    <a href="https://github.com/sunyiyou/dynamic-k-activation" class="pub-link code">Code</a>
  </div>
</div>




<div class="publication-item media-body" data-tags="first-author,interpretability">
  <span class="conference-tag top-tier">ECCV'18</span><b>Interpretable Basis Decomposition for Visual Explanation</b><br>
    Bolei Zhou*, <strong class="author-highlight">Yiyou Sun*</strong>, David Bau*, Antonio Torralba<br> 
  <div class="pub-links">
    <a href="/paper/ibd.pdf" class="pub-link paper">Paper</a>
    <a href="https://github.com/CSAILVision/IBD" class="pub-link code">Code</a>
  </div>
</div>



<div class="publication-item media-body" data-tags="interpretability,other">
  <span class="conference-tag arxiv">arxiv:1806.02891</span><b>Revisiting the Importance of Individual Units in CNNs via Ablation</b><br>
    Bolei Zhou, <strong class="author-highlight">Yiyou Sun</strong>, David Bau, Antonio Torralba<br>
  <div class="pub-links">
    <a href="https://arxiv.org/abs/1806.02891" class="pub-link paper">Paper</a>
  </div>
</div>



<div class="publication-item media-body" data-tags="first-author,other">
  <span class="conference-tag">AIM'17</span><b>Faster R-CNN based autonomous navigation for vehicles in warehouse</b><br>
    <strong class="author-highlight">Yiyou Sun</strong>, Tonghua Su, Zhiying Tu<br> 
  <div class="pub-links">
    <a href="https://www.researchgate.net/profile/Yiyou_Sun/publication/319368440_Faster_R-CNN_based_autonomous_navigation_for_vehicles_in_warehouse/links/5b9584784585153a53152a68/Faster-R-CNN-based-autonomous-navigation-for-vehicles-in-warehouse.pdf" class="pub-link paper">Paper</a>
  </div>
</div>



<div class="publication-item media-body" data-tags="first-author,other">
  <span class="conference-tag workshop">ICML'21 WS</span><span class="spotlight-badge">Spotlight</span><b> LOOD: Localization-based Uncertainty Estimation for Medical Imaging</b> (Spotlight)<br>
    <strong class="author-highlight">Yiyou Sun</strong>, Bastin Joseph, Alison Deatsch, Robert Jeraj, Yixuan (Sharon) Li<br>
  <div class="pub-links">
    <a href="https://icml.cc/virtual/2021/workshop/8373#collapse-sl-11215" class="pub-link video">Video</a>
  </div>
</div>



<div class="publication-item media-body" data-tags="other">
  <span class="conference-tag journal">IEEE DEB</span><b>The Periodic Table of Data Structures</b><br>
    Stratos Idreos, Kostas Zoumpatianos, Manos Athanassoulis, Niv Dayan, Brian Hentschel, Michael S. Kester, Demi Guo, Lukas Maas, Wilson Qin, Abdul Wasay, <strong class="author-highlight">Yiyou Sun</strong><br>
  <div class="pub-links">
    <a href="https://scholar.google.com/scholar?oi=bibs&cluster=9161275908642005505&btnI=1&hl=zh-CN" class="pub-link paper">Paper</a>
  </div>
</div>



<div class="publication-item media-body" data-tags="other">
  <span class="conference-tag journal">IEEE DEB</span><b>Learning Data Structure Alchemy</b><br>
    Stratos Idreos, Kostas Zoumpatianos, Subarna Chatterjee, Wilson Qin, Abdul Wasay, Brian Hentschel, Mike Kester, Niv Dayan, Demi Guo, Minseo Kang,  <strong class="author-highlight">Yiyou Sun</strong><br>
  <div class="pub-links">
    <a href="https://stratos.seas.harvard.edu/files/stratos/files/learningdatastructurealchemy.pdf" class="pub-link paper">Paper</a>
  </div>
</div>













