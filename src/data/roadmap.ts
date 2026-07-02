export interface Topic {
  id: string;
  title: string;
  description: string;
  resources?: string[];
}

export interface Phase {
  id: string;
  phase: string;
  title: string;
  subtitle: string;
  color: string;
  gradient: string;
  icon: string;
  badge: string;
  topics: Topic[];
}

export const roadmapData: Phase[] = [
  {
    id: "phase-1",
    phase: "Phase 1",
    title: "Foundations & Prerequisites",
    subtitle: "Build the bedrock skills every AI/ML engineer needs",
    color: "violet",
    gradient: "from-violet-500 to-purple-600",
    icon: "🧮",
    badge: "Beginner",
    topics: [
      {
        id: "p1-t1",
        title: "Python Programming Basics",
        description: "Variables, loops, functions, OOP, file I/O, virtual environments, pip & packages.",
        resources: ["Python.org docs", "Automate the Boring Stuff", "Real Python"]
      },
      {
        id: "p1-t2",
        title: "Mathematics for AI/ML",
        description: "Linear Algebra (vectors, matrices, eigenvalues), Calculus (derivatives, chain rule), Probability & Statistics (distributions, Bayes theorem).",
        resources: ["3Blue1Brown", "Khan Academy", "Mathematics for Machine Learning (book)"]
      },
      {
        id: "p1-t3",
        title: "NumPy & Pandas",
        description: "Array operations, DataFrame manipulation, data cleaning, merging, groupby, time series basics.",
        resources: ["NumPy docs", "Pandas docs", "Kaggle micro-courses"]
      },
      {
        id: "p1-t4",
        title: "Data Visualization",
        description: "Matplotlib, Seaborn, Plotly — EDA, histograms, heatmaps, scatter plots, dashboards.",
        resources: ["Matplotlib docs", "Seaborn gallery", "Plotly Express"]
      },
      {
        id: "p1-t5",
        title: "Git & Version Control",
        description: "Repos, branches, commits, pull requests, GitHub workflows, collaborative coding.",
        resources: ["Pro Git book", "GitHub Learning Lab"]
      },
      {
        id: "p1-t6",
        title: "Linux / Command Line Basics",
        description: "Shell scripting, file system navigation, environment variables, SSH, tmux.",
        resources: ["The Linux Command Line (book)", "OverTheWire: Bandit"]
      }
    ]
  },
  {
    id: "phase-2",
    phase: "Phase 2",
    title: "Classical Machine Learning",
    subtitle: "Master traditional ML algorithms and workflows",
    color: "blue",
    gradient: "from-blue-500 to-cyan-600",
    icon: "🤖",
    badge: "Beginner–Intermediate",
    topics: [
      {
        id: "p2-t1",
        title: "Supervised Learning",
        description: "Linear/Logistic Regression, Decision Trees, Random Forests, SVMs, KNN, Naive Bayes — when and why to use each.",
        resources: ["Scikit-learn user guide", "Hands-On ML (Aurélien Géron)"]
      },
      {
        id: "p2-t2",
        title: "Unsupervised Learning",
        description: "K-Means, DBSCAN, Hierarchical Clustering, PCA, t-SNE, UMAP for dimensionality reduction.",
        resources: ["Scikit-learn clustering docs", "StatQuest YouTube"]
      },
      {
        id: "p2-t3",
        title: "Model Evaluation & Metrics",
        description: "Accuracy, Precision, Recall, F1, ROC-AUC, Confusion Matrix, Cross-Validation, Bias-Variance tradeoff.",
        resources: ["Scikit-learn metrics", "Machine Learning Mastery"]
      },
      {
        id: "p2-t4",
        title: "Feature Engineering & Selection",
        description: "Encoding categorical data, scaling, imputation, polynomial features, feature importance, wrapper/filter methods.",
        resources: ["Feature Engineering for ML (book)", "Kaggle notebooks"]
      },
      {
        id: "p2-t5",
        title: "Hyperparameter Tuning",
        description: "Grid Search, Random Search, Bayesian Optimization (Optuna), early stopping strategies.",
        resources: ["Optuna docs", "Scikit-learn tuning guide"]
      },
      {
        id: "p2-t6",
        title: "Ensemble Methods",
        description: "Bagging, Boosting (XGBoost, LightGBM, CatBoost), Stacking, Voting classifiers.",
        resources: ["XGBoost docs", "Kaggle competition winning solutions"]
      },
      {
        id: "p2-t7",
        title: "Reinforcement Learning (RL) Fundamentals",
        description: "Agent, environment, state, action, reward, policy, value functions (V, Q). Markov Decision Processes (MDP), Bellman equations, exploration vs exploitation (ε-greedy). Algorithms: Q-Learning, SARSA, Monte Carlo methods, Dynamic Programming.",
        resources: ["Sutton & Barto (RL book — free PDF)", "David Silver RL lectures", "OpenAI Gym / Gymnasium"]
      },
      {
        id: "p2-t8",
        title: "Deep Reinforcement Learning",
        description: "DQN (Deep Q-Network), Double DQN, Dueling DQN, Policy Gradient (REINFORCE), Actor-Critic (A2C/A3C), PPO (Proximal Policy Optimization), SAC, TD3 — used in game playing, robotics & RLHF for LLMs.",
        resources: ["Stable-Baselines3 docs", "Spinning Up in Deep RL (OpenAI)", "CleanRL"]
      },
      {
        id: "p2-t9",
        title: "Semi-Supervised & Self-Supervised Learning",
        description: "Label propagation, pseudo-labeling, consistency regularization, contrastive learning (SimCLR, MoCo), BYOL — critical when labeled data is scarce.",
        resources: ["SimCLR paper", "Lilian Weng blog — self-supervised learning", "HuggingFace Trainer"]
      }
    ]
  },
  {
    id: "phase-3",
    phase: "Phase 3",
    title: "Deep Learning",
    subtitle: "Neural networks from perceptrons to state-of-the-art architectures",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-600",
    icon: "🧠",
    badge: "Intermediate",
    topics: [
      {
        id: "p3-t1",
        title: "Neural Network Fundamentals",
        description: "Perceptrons, forward/backpropagation, activation functions (ReLU, Sigmoid, Tanh, GELU), loss functions, optimizers (SGD, Adam, AdamW).",
        resources: ["Neural Networks & DL (deeplearning.ai)", "fast.ai Part 1"]
      },
      {
        id: "p3-t2",
        title: "PyTorch & TensorFlow",
        description: "Tensors, autograd, custom datasets, DataLoaders, training loops, model saving/loading, GPU acceleration.",
        resources: ["PyTorch tutorials", "TensorFlow docs", "d2l.ai"]
      },
      {
        id: "p3-t3",
        title: "Convolutional Neural Networks (CNNs)",
        description: "Convolution, pooling, receptive fields, ResNet, VGG, EfficientNet, transfer learning, image augmentation.",
        resources: ["CS231n (Stanford)", "torchvision"]
      },
      {
        id: "p3-t4",
        title: "Recurrent Networks (RNN/LSTM/GRU)",
        description: "Sequence modeling, vanishing gradients, LSTM gates, GRU, bidirectional RNNs, time series forecasting.",
        resources: ["Colah's blog", "deeplearning.ai Sequence Models"]
      },
      {
        id: "p3-t5",
        title: "Regularization & Optimization Techniques",
        description: "Dropout, Batch Normalization, Layer Norm, weight decay, learning rate schedulers, gradient clipping.",
        resources: ["Papers with Code", "fast.ai docs"]
      },
      {
        id: "p3-t6",
        title: "Generative Models (GAN / VAE)",
        description: "GAN training dynamics, mode collapse, DCGAN, StyleGAN, Variational Autoencoders (ELBO loss, reparameterization trick).",
        resources: ["GAN — original paper", "VAE — Kingma & Welling", "Lilian Weng blog"]
      }
    ]
  },
  {
    id: "phase-4",
    phase: "Phase 4",
    title: "Natural Language Processing",
    subtitle: "From bag-of-words to modern transformer-based NLP",
    color: "orange",
    gradient: "from-orange-500 to-amber-600",
    icon: "📝",
    badge: "Intermediate",
    topics: [
      {
        id: "p4-t1",
        title: "NLP Fundamentals",
        description: "Tokenization, stemming, lemmatization, TF-IDF, BoW, word embeddings (Word2Vec, GloVe, FastText).",
        resources: ["NLTK book", "spaCy docs", "Gensim"]
      },
      {
        id: "p4-t2",
        title: "Transformer Architecture",
        description: "Self-attention, multi-head attention, positional encoding, encoder-decoder stacks — understand the original 'Attention Is All You Need' paper.",
        resources: ["The Illustrated Transformer (Jay Alammar)", "Attention Is All You Need paper"]
      },
      {
        id: "p4-t3",
        title: "BERT & Encoder Models",
        description: "Masked Language Modeling, NSP, fine-tuning BERT/RoBERTa/DeBERTa for classification, NER, QA tasks.",
        resources: ["HuggingFace BERT docs", "Chris McCormick's BERT tutorial"]
      },
      {
        id: "p4-t4",
        title: "HuggingFace Ecosystem",
        description: "Transformers library, Datasets hub, Tokenizers, Trainer API, AutoModel, pipelines, model cards.",
        resources: ["HuggingFace docs", "HuggingFace Course (free)"]
      },
      {
        id: "p4-t5",
        title: "Text Classification, NER & Summarization",
        description: "Fine-tuning pipelines for sentiment analysis, entity recognition, abstractive/extractive summarization.",
        resources: ["HuggingFace Tasks", "Papers with Code NLP benchmarks"]
      },
      {
        id: "p4-t6",
        title: "Evaluation & NLP Benchmarks",
        description: "BLEU, ROUGE, METEOR, BERTScore, GLUE, SuperGLUE, SQuAD benchmarks.",
        resources: ["Evaluate library", "Papers with Code Leaderboards"]
      }
    ]
  },
  {
    id: "phase-5",
    phase: "Phase 5",
    title: "Large Language Models (LLMs)",
    subtitle: "Deep-dive into modern LLM architecture, training, and deployment",
    color: "rose",
    gradient: "from-rose-500 to-pink-600",
    icon: "🦾",
    badge: "Advanced",
    topics: [
      {
        id: "p5-t1",
        title: "LLM Architecture Deep Dive",
        description: "GPT-style decoder-only models, causal masking, KV caching, rotary positional embeddings (RoPE), grouped query attention (GQA), MoE models.",
        resources: ["GPT-2 paper", "LLaMA paper", "The Illustrated GPT-2"]
      },
      {
        id: "p5-t2",
        title: "Pre-training & Scaling Laws",
        description: "Next-token prediction, dataset curation (The Pile, C4), compute-optimal training (Chinchilla laws), mixed-precision training, distributed training (DDP, FSDP).",
        resources: ["Chinchilla paper", "Megatron-LM", "nanoGPT by Karpathy"]
      },
      {
        id: "p5-t3",
        title: "Fine-Tuning Strategies",
        description: "Full fine-tuning, Instruction tuning, PEFT methods: LoRA, QLoRA, Prefix Tuning, Adapter layers — practical setup with trl + HuggingFace.",
        resources: ["PEFT library", "QLoRA paper", "TRL docs"]
      },
      {
        id: "p5-t4",
        title: "RLHF & Alignment",
        description: "Reward Modeling, PPO for LLMs, DPO (Direct Preference Optimization), Constitutional AI, safety & alignment fundamentals.",
        resources: ["InstructGPT paper", "DPO paper", "Anthropic Constitutional AI paper"]
      },
      {
        id: "p5-t5",
        title: "Prompt Engineering",
        description: "Zero-shot, few-shot, chain-of-thought, self-consistency, Tree of Thought, ReAct, structured output prompting.",
        resources: ["Prompt Engineering Guide (promptingguide.ai)", "Learn Prompting"]
      },
      {
        id: "p5-t6",
        title: "Quantization & Efficient Inference",
        description: "INT4/INT8 quantization, GPTQ, AWQ, llama.cpp, vLLM, TensorRT-LLM, speculative decoding, flash attention.",
        resources: ["vLLM docs", "bitsandbytes", "GPTQ paper"]
      },
      {
        id: "p5-t7",
        title: "Open-Source LLMs",
        description: "LLaMA 3, Mistral, Mixtral, Phi-3, Gemma, Qwen — understanding model families, context windows, benchmarks.",
        resources: ["Ollama", "LMStudio", "Open LLM Leaderboard (HuggingFace)"]
      }
    ]
  },
  {
    id: "phase-6",
    phase: "Phase 6",
    title: "Generative AI (GenAI)",
    subtitle: "Multimodal generation — text, image, audio, video, and code",
    color: "fuchsia",
    gradient: "from-fuchsia-500 to-purple-600",
    icon: "✨",
    badge: "Advanced",
    topics: [
      {
        id: "p6-t1",
        title: "Diffusion Models",
        description: "DDPM, DDIM, score matching, U-Net backbone, Stable Diffusion architecture (VAE + CLIP + U-Net), CFG (classifier-free guidance).",
        resources: ["Annotated Diffusion (HuggingFace)", "DDPM paper", "Diffusers library"]
      },
      {
        id: "p6-t2",
        title: "Text-to-Image & Image Editing",
        description: "Stable Diffusion XL, FLUX, ControlNet, IP-Adapter, LoRA for image models, InstructPix2Pix, DreamBooth fine-tuning.",
        resources: ["Diffusers docs", "Automatic1111 WebUI", "ComfyUI"]
      },
      {
        id: "p6-t3",
        title: "Multimodal Models (Vision-Language)",
        description: "CLIP, BLIP-2, LLaVA, GPT-4V, Gemini Vision — image captioning, visual QA, document understanding.",
        resources: ["LLaVA paper", "BLIP-2 paper", "OpenCLIP"]
      },
      {
        id: "p6-t4",
        title: "Text-to-Speech & Audio Generation",
        description: "Whisper (ASR), TTS models (Bark, XTTS, ElevenLabs API), voice cloning, audio diffusion (AudioLDM, MusicGen).",
        resources: ["Whisper docs", "Coqui TTS", "MusicGen by Meta"]
      },
      {
        id: "p6-t5",
        title: "Code Generation Models",
        description: "Codex, DeepSeek Coder, CodeLlama, StarCoder, GitHub Copilot internals, fill-in-the-middle training objective.",
        resources: ["DeepSeek Coder paper", "BigCode project"]
      },
      {
        id: "p6-t6",
        title: "Evaluation of GenAI Systems",
        description: "FID/IS for images, CLIP score, human preference evaluation, LLM-as-judge, LMSYS Chatbot Arena methodology.",
        resources: ["MT-Bench", "LMSYS Leaderboard", "Ragas (RAG eval)"]
      }
    ]
  },
  {
    id: "phase-7",
    phase: "Phase 7",
    title: "Retrieval-Augmented Generation (RAG)",
    subtitle: "Ground LLMs in external knowledge for accurate, up-to-date responses",
    color: "sky",
    gradient: "from-sky-500 to-blue-600",
    icon: "🔍",
    badge: "Advanced",
    topics: [
      {
        id: "p7-t1",
        title: "Embeddings & Vector Databases",
        description: "Sentence embeddings (BGE, E5, OpenAI text-embedding-3), cosine similarity, vector DBs: Pinecone, Weaviate, Qdrant, ChromaDB, pgvector.",
        resources: ["MTEB Leaderboard", "Pinecone learning center", "ChromaDB docs"]
      },
      {
        id: "p7-t2",
        title: "Basic RAG Pipeline",
        description: "Document loading, chunking strategies (fixed, recursive, semantic), indexing, retrieval, prompt stuffing, response generation.",
        resources: ["LangChain docs", "LlamaIndex docs", "RAG survey paper"]
      },
      {
        id: "p7-t3",
        title: "Advanced RAG Techniques",
        description: "HyDE, re-ranking (cross-encoders), multi-query retrieval, parent-child chunking, RAPTOR, GraphRAG, iterative retrieval.",
        resources: ["Advanced RAG (LlamaIndex)", "ColBERT / RAPTOR papers"]
      },
      {
        id: "p7-t4",
        title: "Hybrid Search",
        description: "BM25 + dense retrieval fusion, Reciprocal Rank Fusion (RRF), sparse-dense hybrid, Elasticsearch + vector search.",
        resources: ["Weaviate hybrid search", "Elasticsearch kNN docs"]
      },
      {
        id: "p7-t5",
        title: "RAG Evaluation",
        description: "Faithfulness, answer relevance, context recall — using Ragas, TruLens, DeepEval frameworks.",
        resources: ["Ragas docs", "TruLens docs", "ARES benchmark"]
      }
    ]
  },
  {
    id: "phase-8",
    phase: "Phase 8",
    title: "Agentic AI & Multi-Agent Systems",
    subtitle: "Build autonomous AI agents that plan, reason, use tools, and collaborate",
    color: "lime",
    gradient: "from-lime-500 to-green-600",
    icon: "🕵️",
    badge: "Advanced",
    topics: [
      {
        id: "p8-t1",
        title: "AI Agent Fundamentals",
        description: "ReAct framework, tool use, memory (short-term/long-term), agent loops, planning vs execution, agent safety.",
        resources: ["ReAct paper", "LangChain Agents", "OpenAI Function Calling"]
      },
      {
        id: "p8-t2",
        title: "Tool Use & Function Calling",
        description: "OpenAI / Anthropic function calling APIs, tool schemas (JSON Schema), parallel tool calls, structured outputs.",
        resources: ["OpenAI function calling docs", "Anthropic tool use docs"]
      },
      {
        id: "p8-t3",
        title: "LangChain & LangGraph",
        description: "Chains, LCEL, LangGraph stateful agents, conditional edges, checkpointing, human-in-the-loop workflows.",
        resources: ["LangGraph docs", "LangChain Expression Language"]
      },
      {
        id: "p8-t4",
        title: "LlamaIndex Agents & Workflows",
        description: "QueryEngine agents, tool agents, multi-step reasoning, event-driven Workflows API.",
        resources: ["LlamaIndex Agents docs", "LlamaIndex Workflows"]
      },
      {
        id: "p8-t5",
        title: "Multi-Agent Orchestration",
        description: "AutoGen, CrewAI, Agency Swarm — role-based agents, manager-worker patterns, inter-agent communication, shared memory.",
        resources: ["AutoGen paper & docs", "CrewAI docs", "Microsoft Magentic-One"]
      },
      {
        id: "p8-t6",
        title: "Memory Systems for Agents",
        description: "In-context memory, external episodic memory (vector store), semantic memory, procedural memory, MemGPT/Letta architecture.",
        resources: ["MemGPT paper", "Zep memory", "mem0 library"]
      },
      {
        id: "p8-t7",
        title: "Agent Evaluation & Benchmarks",
        description: "SWE-bench, GAIA, WebArena, AgentBench — measuring agent success rate, robustness, cost-efficiency.",
        resources: ["SWE-bench", "GAIA leaderboard", "AgentBench paper"]
      }
    ]
  },
  {
    id: "phase-9",
    phase: "Phase 9",
    title: "MLOps & LLMOps",
    subtitle: "Production-grade deployment, monitoring, and lifecycle management",
    color: "yellow",
    gradient: "from-yellow-500 to-orange-500",
    icon: "⚙️",
    badge: "Advanced",
    topics: [
      {
        id: "p9-t1",
        title: "ML Pipelines & Experiment Tracking",
        description: "MLflow, W&B (Weights & Biases), DVC, dataset versioning, model registry, reproducible experiments.",
        resources: ["MLflow docs", "W&B docs", "DVC docs"]
      },
      {
        id: "p9-t2",
        title: "Containerization & Orchestration",
        description: "Docker for ML, FastAPI model serving, Kubernetes basics, Helm charts, GPU node pools.",
        resources: ["Docker docs", "FastAPI ML serving tutorial", "KubeFlow"]
      },
      {
        id: "p9-t3",
        title: "Cloud AI Platforms",
        description: "AWS SageMaker, GCP Vertex AI, Azure ML — managed training, endpoints, batch transform, auto-scaling.",
        resources: ["AWS SageMaker docs", "GCP Vertex AI docs"]
      },
      {
        id: "p9-t4",
        title: "LLM Serving & Inference Servers",
        description: "vLLM, TGI (Text Generation Inference), Triton Inference Server, OpenAI-compatible APIs, batching strategies.",
        resources: ["vLLM docs", "TGI by HuggingFace", "Triton docs"]
      },
      {
        id: "p9-t5",
        title: "Observability & Monitoring",
        description: "LangSmith, LangFuse, Arize Phoenix, model drift detection, latency/cost tracing, guardrails (NeMo, LLMGuard).",
        resources: ["LangSmith docs", "Langfuse docs", "Arize AI"]
      },
      {
        id: "p9-t6",
        title: "CI/CD for ML",
        description: "GitHub Actions for model training/testing, automated evaluation gates, blue-green LLM deployments, A/B testing.",
        resources: ["CML (Iterative.ai)", "GitHub Actions ML examples"]
      }
    ]
  },
  {
    id: "phase-10",
    phase: "Phase 10",
    title: "Frontier & Research Topics",
    subtitle: "Stay at the bleeding edge of AI/ML research and emerging paradigms",
    color: "indigo",
    gradient: "from-indigo-500 to-violet-600",
    icon: "🚀",
    badge: "Expert",
    topics: [
      {
        id: "p10-t1",
        title: "Reasoning Models",
        description: "OpenAI o1/o3, DeepSeek-R1, chain-of-thought distillation, process reward models (PRMs), Monte Carlo Tree Search for LLMs.",
        resources: ["DeepSeek-R1 paper", "OpenAI o1 system card", "PRM paper"]
      },
      {
        id: "p10-t2",
        title: "World Models & Embodied AI",
        description: "Model-based RL, Dreamer, JEPA (Yann LeCun), robotics foundation models (RT-2, OpenVLA), sim-to-real transfer.",
        resources: ["JEPA paper", "RT-2 paper", "Dreamer paper"]
      },
      {
        id: "p10-t3",
        title: "AI Safety & Responsible AI",
        description: "Red-teaming, jailbreaks, prompt injection, interpretability (mechanistic interp), SHAP/LIME explainability, EU AI Act basics.",
        resources: ["Anthropic interpretability research", "OWASP LLM Top 10", "AI Safety course"]
      },
      {
        id: "p10-t4",
        title: "Long-Context & Memory-Augmented LLMs",
        description: "Positional encoding for long context (YaRN, LongRoPE), retrieval-augmented memory, streaming LLMs, Mamba (SSMs).",
        resources: ["Mamba paper", "YaRN paper", "LongLoRA"]
      },
      {
        id: "p10-t5",
        title: "AI Agents with Computer Use",
        description: "Claude Computer Use, OpenAI Operator, browser agents (Browser-Use, Playwright + LLM), OS-level automation.",
        resources: ["Anthropic computer use docs", "Browser-Use GitHub", "WebArena"]
      },
      {
        id: "p10-t6",
        title: "Research Paper Reading & Contributing",
        description: "How to read arXiv papers efficiently, reproduce SOTA results, write & submit to NeurIPS/ICML/ICLR/ACL, open-source contributions.",
        resources: ["arXiv.org", "Papers with Code", "Yannic Kilcher YouTube"]
      }
    ]
  }
];
