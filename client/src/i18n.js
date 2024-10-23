import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
     lng: "en",
    returnObjects:true,
  //  fallbackLng: "en",
    
    resources:{
        en:{
            translation: {
                greetings: {
                    one: "About",
                    two: "Products",
                    three: "For Teams",
                    four: "Log in",
                    five: "Log out"
                },
                leftside: {
                    one: "Home",
                    two: "PUBLIC",   
                    three: "Questions",
                    four: "Tags",
                    five: "Users",
                },
                homebar: {
                    zero: "All Questions",
                    one: "Top Questions",
                    two: "Ask Question",
                    three: "questions",
                    four: "Loading...",
                    five: "votes",
                    six: "answers",
                },
                rightbar: {
                    zero: "The Overflow Blog",
                    one: "Featured on Meta",
                    two: "Hot Meta Posts",
                    three: "Watched tags",
                    four: "Observability is key to the future of software (and your DevOps career)",
                    five: "Podcast 374: How valuable is your screen name",
                    six: "Review queue workflows - Final release",
                    seven: "Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG",
                    eight: "Outdated Answers: accepted answer is now unpinned on A2Quests-Coders",
                    nine: "Why was this spam flag declined, yet the question marked as spam",
                    ten: "What is the best course of action when a user has high enough rep to",
                    eleven: "Is a link to the 'How to ask' help page a useful comment",
                },
                public: {
                    zero: "Ask a public Question",
                    one: "Title",
                    two: "Be specific and imagine you’re asking a question to another person",
                    three: "Body",
                    four: "Include all the information someone would need to answer your question",
                    five: "Tags",
                    six: "Add up to 5 tags to describe what your question is about",
                    seven: "Review your question",
                    eight: "e.g. Is there an R function for finding the index of an element in a vector?",
                    nine: "e.g. (xml typescript wordpress)",
                },about: {
                    zero: "Join the A2Quests-Coders community",
                    one: "Get unstuck — ask a question",
                    two: "Unlock new privileges like voting and commenting",
                    three: "Save your favorite tags, filters, and jobs",
                    four: "Earn reputation and badges",
                    five: "Collaborate and share knowledge with a private group for",
                    six: "Get A2Quests-Coders for Teams free for up to 50 users.",
                },logs: {
                    zero: "Display Name",
                    one: "Email",
                    two: "Password",
                    five: "forgot password",
                },tagss: {
                    zero: "Tags",
                    one: "A tag is a keyword or label that categorizes your question with other, similar questions.Using the right tags makes it easier for others to find and answer your question",
                    two: "Users",
                }
            },
        },

        hi: {
            translation:{
                greetings:{
                    one: "बारे में",
                    two: "उत्पादों",
                    three: "टीमों के लिए",
                    four: "लॉग इन",
                    five: "लॉग आउट"
                }, leftside: {
                    one: "घर",
                    two: "जनता",
                    three: "प्रश्न",
                    four: "टैग",
                    five: "उपयोगकर्ताओं"
                },homebar: {
                    one: "शीर्ष प्रश्न",
                    two: "प्रश्न पूछो",
                    three: "प्रश्न",
                    four: "लोड हो रहा है...",
                    five: "वोट",
                    six: "जवाब",
                },rightbar: {
                    zero: "अतिप्रवाह ब्लॉग",
                    one: "मेटा पर विशेष रुप से प्रदर्शित",
                    two: "हॉट मेटा पोस्ट",
                    three: "देखे गए टैग",
                    four: "सॉफ़्टवेयर के भविष्य (और आपके DevOps करियर) के लिए अवलोकनशीलता महत्वपूर्ण है",
                    five: "पॉडकास्ट 374: आपका स्क्रीन नाम कितना मूल्यवान है",
                    six: "कतार वर्कफ़्लो की समीक्षा करें - अंतिम रिलीज़",
                    seven: "कृपया मूल्यवान सहयोगियों का स्वागत करें: #958 - वी2ब्लास्ट #959 - स्पेंसरजी",
                    eight: "पुराने उत्तर: स्वीकृत उत्तर अब A2क्वेस्ट-कोडर्स पर अनपिन कर दिया गया है",
                    nine: "इस स्पैम फ़्लैग को अस्वीकार क्यों किया गया, फिर भी प्रश्न को स्पैम के रूप में चिह्नित किया गया",
                    ten: "जब किसी उपयोगकर्ता के पास पर्याप्त उच्च प्रतिनिधि हो तो कार्रवाई का सर्वोत्तम तरीका क्या है",
                    eleven: "क्या 'कैसे पूछें' सहायता पृष्ठ का लिंक एक उपयोगी टिप्पणी है",
                }, public: {
                    zero: "एक सार्वजनिक प्रश्न पूछें",
                    one: "शीर्षक",
                    two: "विशिष्ट बनें और कल्पना करें कि आप किसी अन्य व्यक्ति से प्रश्न पूछ रहे हैं",
                    three: "निकाय",
                    four: "वह सभी जानकारी शामिल करें जिसकी किसी को आपके प्रश्न का उत्तर देने के लिए आवश्यकता होगी",
                    five: "टैग",
                    six: "आपका प्रश्न किस बारे में है इसका वर्णन करने के लिए अधिकतम 5 टैग जोड़ें",
                    seven: "अपने प्रश्न की समीक्षा करें",
                    eight: "जैसे क्या वेक्टर में किसी तत्व का सूचकांक खोजने के लिए कोई R फ़ंक्शन है?",
                    nine: "जैसे (एक्सएमएल टाइपस्क्रिप्ट वर्डप्रेस)",
                },about: {
                    zero: "A2क्वेस्ट-कोडर्स समुदाय में शामिल हों",
                    one: "उलझन से मुक्त हो जाओ - एक प्रश्न पूछो",
                    two: "मतदान और टिप्पणी जैसे नए विशेषाधिकार अनलॉक करें",
                    three: "अपने पसंदीदा टैग, फ़िल्टर और नौकरियां सहेजें",
                    four: "प्रतिष्ठा और बैज अर्जित करें",
                    five: "एक निजी समूह के साथ सहयोग करें और ज्ञान साझा करें",
                    six: "अधिकतम 50 उपयोगकर्ताओं के लिए टीमों के लिए A2क्वेस्ट-कोडर्स निःशुल्क प्राप्त करें।",
                },logs: {
                    zero: "प्रदर्शित होने वाला नाम",
                    one: "ईमेल",
                    two: "पासवर्ड",
                    three: "साइन अप करें",
                    four: "लॉग इन करें",
                    five: "पासवर्ड भूल गए",
                    six: "कोई खाता नहीं है",
                    seven: "क्या आपके पास पहले से एक खाता मौजूद है",
                },tagss: {
                    zero: "टैग",
                    one: "टैग एक कीवर्ड या लेबल है जो आपके प्रश्न को अन्य समान प्रश्नों के साथ वर्गीकृत करता है। सही टैग का उपयोग करने से दूसरों के लिए आपके प्रश्न को ढूंढना और उसका उत्तर देना आसान हो जाता है।",
                    two: "उपयोगकर्ताओं",
                }
            }
        },
        fr: {
            translation:{
                greetings:{
                    one: "À propos",
                    two: "Produits",
                    three: "Pour les équipes",
                    four: "Se connecter",
                    five: "Se déconnecter"
                }, leftside: {
                    one: "Maison",
                    two: "PUBLIQUE",
                    three: "Questions",
                    four: "Balises",
                    five: "Utilisatrices",
                },homebar: {
                    one: "Questions les plus fréquentes",
                    two: "Poser une question",
                    three: "des questions",
                    four: "Chargement...",
                    five: "voix",
                    six: "réponses",
                },rightbar: {
                    zero: "Le blog de débordement",
                    one: "Présenté sur Meta",
                    two: "Méta-messages chauds",
                    three: "Balises surveillées",
                    four: "L'observabilité est la clé de l'avenir des logiciels (et de votre carrière DevOps)",
                    five: "Podcast 374 : Quelle est la valeur de votre pseudonyme",
                    six: "Examiner les workflows de file d'attente - Version finale",
                    seven: "Veuillez accueillir nos précieux associés : #958 - V2Blast #959 - SpencerG",
                    eight: "Réponses obsolètes : la réponse acceptée n'est désormais plus épinglée sur A2Quests-Coders",
                    nine: "Pourquoi cet indicateur de spam a-t-il été refusé alors que la question a été marquée comme spam ",
                    ten: "Quelle est la meilleure marche à suivre lorsqu'un utilisateur a une réputation suffisamment élevée pour",
                    eleven: "Un lien vers la page d'aide « Comment demander » est-il un commentaire utile",
                }, public: {
                    zero: "Poser une question publique",
                    one: "Titre",
                    two: "Soyez précis et imaginez que vous posez une question à une autre personne",
                    three: "Corps",
                    four: "Incluez toutes les informations dont quelqu'un aurait besoin pour répondre à votre question",
                    five: "Balises",
                    six: "Ajoutez jusqu'à 5 balises pour décrire le sujet de votre question",
                    seven: "Révisez votre question",
                    eight: "par ex. Existe-t-il une fonction R pour trouver l'indice d'un élément dans un vecteur ?",
                    nine: "par ex. (xml dactylographié wordpress)",
                },about: {
                    zero: "Rejoignez la communauté A2Quests-Coders",
                    one: "Détachez-vous - posez une question",
                    two: "Débloquez de nouveaux privilèges comme voter et commenter",
                    three: "Enregistrez vos balises, filtres et tâches préférés",
                    four: "Gagnez de la réputation et des badges",
                    five: "Collaborez et partagez vos connaissances avec un groupe privé pour",
                    six: "Obtenez A2Quests-Coders pour Teams gratuitement pour un maximum de 50 utilisateurs.",
                },logs: {
                    zero: "Nom d'affichage",
                    one: "E-mail",
                    two: "Mot de passe",
                    three: "S'inscrire",
                    four: "Se connecter",
                    five: "Mot de passe oublié",
                    six: "Je n'ai pas de compte",
                    seven: "Vous avez déjà un compte",
                },tagss: {
                    zero: "Balises",
                    one: "Une balise est un mot-clé ou une étiquette qui classe votre question avec d'autres questions similaires. L'utilisation des bonnes balises permet aux autres de trouver plus facilement votre question et d'y répondre.",
                    two: "Utilisatrices",
                }
            }
        },
        ch: {
            translation:{
                greetings:{
                    one: "关于",
                    two: "产品",
                    three: "对于团队",
                    four: "登录",
                    five: "退出"
                }, leftside: {
                    one: "家",
                    two: "民众",
                    three: "问题",
                    four: "标签",
                    five: "用户",
                },homebar: {
                    one: "热门问题",
                    two: "提问",
                    three: "问题",
                    four: "加载中...",
                    five: "投票",
                    six: "答案",
                },rightbar: {
                    zero: "溢出博客",
                    one: "元上推荐",
                    two: "热门元帖子",
                    three: "观看过的标签",
                    four: "可观察性是软件未来（以及您的 DevOps 职业）的关键",
                    five: "播客 374：你的网名有多有价值",
                    six: "检查队列工作流程 - 最终版本",
                    seven: "欢迎尊贵的同事：#958 - V2Blast #959 - SpencerG",
                    eight: "过时的答案：已接受的答案现已在 A2Quests-Coders 上取消固定",
                    nine: "为什么此垃圾邮件标记被拒绝，但问题却标记为垃圾邮件",
                    ten: "当用户有足够高的代表时，最好的行动方案是什么",
                    eleven: "“如何询问”帮助页面的链接是有用的评论吗",
                }, public: {
                    zero: "提出公开问题",
                    one: "标题",
                    two: "要具体，想象你正在向另一个人问问题",
                    three: "身体",
                    four: "包含回答您的问题所需的所有信息",
                    five: "标签",
                    six: "添加最多 5 个标签来描述您的问题的内容",
                    seven: "查看您的问题",
                    eight: "例如是否有 R 函数用于查找向量中元素的索引？",
                    nine: "例如（xml 打字稿 WordPress）",
                },about: {
                    zero: "加入 A2Quests-Coders 社区",
                    one: "摆脱困境——提出问题",
                    two: "解锁投票和评论等新权限",
                    three: "保存您最喜欢的标签、过滤器和职位",
                    four: "赢得声誉和徽章",
                    five: "与私人团体合作并分享知识",
                    six: "为最多 50 名用户免费获取 A2Quests-Coders for Teams",
                },logs: {
                    zero: "显示名称",
                    one: "电子邮件",
                    two: "密码",
                    three: "报名",
                    four: "登录",
                    five: "忘记密码",
                    six: "没有账户",
                    seven: "已有账户",
                },tagss: {
                    zero: "标签",
                    one: "标签是将您的问题与其他类似问题进行分类的关键字或标签。使用正确的标签可以让其他人更轻松地找到并回答您的问题",
                    two: "用户",
                }
            }
        },
        po: {
            translation:{
                greetings:{
                    one: "Sobre",
                    two: "Produtos",
                    three: "Para equipes",
                    four: "Conecte-se",
                    five: "Sair"
                }, leftside: {
                    one: "Lar",
                    two: "PÚBLICA",
                    three: "Questões",
                    four: "Etiquetas",
                    five: "Usuárias",
                },homebar: {
                    one: "Principais perguntas",
                    two: "Faça uma pergunta",
                    three: "questões",
                    four: "Carregando...",
                    five: "votos",
                    six: "respostas",
                },rightbar: {
                    zero: "O Blog do Estouro",
                    one: "Destaque no Meta",
                    two: "Meta-postagens interessantes",
                    three: "Tags assistidas",
                    four: "A observabilidade é a chave para o futuro do software (e para sua carreira em DevOps)",
                    five: "Podcast 374: Quão valioso é o seu nome de tela",
                    six: "Revisar fluxos de trabalho de fila – versão final",
                    seven: "Por favor, dê as boas-vindas a associados valiosos: #958 - V2Blast #959 - SpencerG",
                    eight: "Respostas desatualizadas: a resposta aceita agora está desafixada no A2Quests-Coders",
                    nine: "Por que esse sinalizador de spam foi recusado, mas a pergunta foi marcada como spam",
                    ten: "Qual é o melhor curso de ação quando um usuário tem uma reputação alta o suficiente para",
                    eleven: "Um link para a página de ajuda 'Como perguntar' é um comentário útil",
                }, public: {
                    zero: "Faça uma pergunta pública",
                    one: "Título",
                    two: "Seja específico e imagine que você está fazendo uma pergunta a outra pessoa",
                    three: "Corpo",
                    four: "Inclua todas as informações que alguém precisaria para responder à sua pergunta",
                    five: "Etiquetas",
                    six: "Adicione até cinco tags para descrever o assunto da sua pergunta",
                    seven: "Revise sua pergunta",
                    eight: "por exemplo Existe uma função R para encontrar o índice de um elemento em um vetor?",
                    nine: "por exemplo (xml digitado wordpress)",
                },about: {
                    zero: "Junte-se à comunidade A2Quests-Coders",
                    one: "Solte-se - faça uma pergunta",
                    two: "Desbloqueie novos privilégios, como votar e comentar",
                    three: "Salve suas tags, filtros e trabalhos favoritos",
                    four: "Ganhe reputação e distintivos",
                    five: "Colabore e compartilhe conhecimento com um grupo privado para",
                    six: "Obtenha A2Quests-Coders for Teams gratuitamente para até 50 usuários.",
                },logs: {
                    zero: "Nome de exibição",
                    one: "E-mail",
                    two: "Senha",
                    three: "Inscrever-se",
                    four: "Conecte-se",
                    five: "Esqueceu sua senha",
                    six: "Não tenho uma conta",
                    seven: "Já tenho uma conta",
                },tagss: {
                    zero: "Etiquetas",
                    one: "Uma tag é uma palavra-chave ou rótulo que categoriza sua pergunta com outras perguntas semelhantes. Usar as tags certas torna mais fácil para outras pessoas encontrarem e responderem à sua perguntaA tag is a keyword or label that categorizes your question with other, similar questions.Using the right tags makes it easier for others to find and answer your question",
                    two: "Usuárias",
                }
            }
        },
        sp: {
            translation:{
                greetings:{
                    one: "Acerca de",
                    two: "Productos",
                    three: "Para equipos",
                    four: "Acceso",
                    five: "Finalizar la sesión"
                }, leftside: {
                    one: "Hogar",
                    two: "PÚBLICA",
                    three: "Preguntas",
                    four: "Etiquetas",
                    five: "Usuarias",
                },homebar: {
                    one: "Preguntas principales",
                    two: "hacer pregunta",
                    three: "preguntas",
                    four: "Cargando...",
                    five: "votos",
                    six: "respuestas",
                },rightbar: {
                    zero: "El blog de desbordamiento",
                    one: "Destacado en Meta",
                    two: "Meta publicaciones calientes",
                    three: "Etiquetas vigiladas",
                    four: "La observabilidad es clave para el futuro del software (y su carrera en DevOps)",
                    five: "Podcast 374: ¿Qué tan valioso es tu nombre de usuario",
                    six: "Revisar flujos de trabajo en cola: versión final",
                    seven: "Démosle la bienvenida a nuestros valiosos asociados: #958 - V2Blast #959 - SpencerG",
                    eight: "Respuestas obsoletas: la respuesta aceptada ahora no está fijada en A2Quests-Coders",
                    nine: "¿Por qué se rechazó esta marca de spam y la pregunta se marcó como spam",
                    ten: "¿Cuál es el mejor curso de acción cuando un usuario tiene suficiente reputación para",
                    eleven: "¿Es un enlace a la página de ayuda 'Cómo preguntar' un comentario útil",
                }, public: {
                    zero: "Haz una pregunta pública",
                    one: "Título",
                    two: "Sea específico e imagine que le está haciendo una pregunta a otra persona.",
                    three: "Cuerpo",
                    four: "Incluya toda la información que alguien necesitaría para responder su pregunta.",
                    five: "Etiquetas",
                    six: "Añade hasta 5 etiquetas para describir de qué se trata tu pregunta",
                    seven: "Revisa tu pregunta",
                    eight: "p.ej. ¿Existe una función R para encontrar el índice de un elemento en un vector?",
                    nine: "p.ej. (xml mecanografiado wordpress)",
                },about: {
                    zero: "Únete a la comunidad A2Quests-Coders",
                    one: "Despegue: haga una pregunta",
                    two: "Desbloquea nuevos privilegios como votar y comentar.",
                    three: "Guarde sus etiquetas, filtros y trabajos favoritos",
                    four: "Gana reputación e insignias",
                    five: "Colabora y comparte conocimientos con un grupo privado para",
                    six: "Obtenga A2Quests-Coders for Teams gratis para hasta 50 usuarios.",
                },logs: {
                    zero: "Nombre para mostrar",
                    one: "Correo electrónico",
                    two: "Contraseña",
                    three: "Inscribirse",
                    four: "Acceso",
                    five: "Has olvidado tu contraseña",
                    six: "No tienes una cuenta",
                    seven: "Ya tienes una cuenta",
                },tagss: {
                    zero: "Etiquetas",
                    one: "Una etiqueta es una palabra clave o etiqueta que categoriza su pregunta junto con otras preguntas similares. El uso de las etiquetas correctas facilita que otros encuentren y respondan su pregunta.",
                    two: "Usuarias",
                }
            }
        }
    }
});

