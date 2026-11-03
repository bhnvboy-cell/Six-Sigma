// Auto-generated from data/i18n/ar/resources.json. Do not edit by hand.
// Run: node scripts/build-localized-data.js
(function (root) {
    "use strict";
    var catalog = {
  "version": 1,
  "templates": [
    {
      "id": "project-charter",
      "title": "ميثاق المشروع",
      "phase": "Define",
      "minBelt": "white",
      "icon": "fa-file-signature",
      "estimatedMinutes": 30,
      "description": "قم بتخويل المشروع من خلال تحديد المشكلة والهدف والنطاق والفريق والمقاييس والمعالم.",
      "fields": [
        {
          "key": "projectName",
          "label": "اسم المشروع",
          "type": "text",
          "section": "أساسيات المشروع",
          "required": true,
          "wide": true,
          "placeholder": "تقليل تباين تعبئة خط التعبئة"
        },
        {
          "key": "projectLead",
          "label": "قائد المشروع",
          "type": "text",
          "placeholder": "الاسم ومستوى الحزام"
        },
        {
          "key": "sponsor",
          "label": "الراعي التنفيذي",
          "type": "text",
          "placeholder": "الاسم والدور"
        },
        {
          "key": "startDate",
          "label": "تاريخ البدء",
          "type": "date"
        },
        {
          "key": "targetDate",
          "label": "اكتمال الهدف",
          "type": "date"
        },
        {
          "key": "problemStatement",
          "label": "بيان المشكلة",
          "type": "textarea",
          "section": "حالة الأعمال",
          "required": true,
          "rows": 3,
          "wide": true,
          "help": "اذكر ما هو الخطأ وأين ومتى وكم. تجنب الأسباب والحلول.",
          "placeholder": "من يناير إلى مارس، أنتج الخط الثاني زجاجات غير مملوءة بنسبة 4.2%..."
        },
        {
          "key": "businessCase",
          "label": "حالة الأعمال",
          "type": "textarea",
          "section": "حالة الأعمال",
          "required": true,
          "rows": 3,
          "wide": true,
          "placeholder": "اشرح العميل أو التكلفة أو الامتثال أو التأثير الاستراتيجي."
        },
        {
          "key": "goalStatement",
          "label": "بيان الهدف",
          "type": "textarea",
          "section": "حالة الأعمال",
          "required": true,
          "rows": 2,
          "wide": true,
          "help": "قم بتضمين مقياس وخط الأساس والهدف والموعد النهائي.",
          "placeholder": "تقليل تباين التعبئة من 3.8 مل إلى 1.5 مل بحلول 30 يونيو."
        },
        {
          "key": "scopeIn",
          "label": "في النطاق",
          "type": "textarea",
          "section": "نِطَاق",
          "rows": 3,
          "placeholder": "حشو الخط الثاني، والتحويلات، وطريقة المشغل، وفحص التعبئة."
        },
        {
          "key": "scopeOut",
          "label": "خارج النطاق",
          "type": "textarea",
          "section": "نِطَاق",
          "rows": 3,
          "placeholder": "إعادة تصميم موردي الزجاجات، الخط الأول، والتعامل مع المستودعات."
        },
        {
          "key": "successMetrics",
          "label": "مقاييس النجاح",
          "type": "table",
          "section": "مقاسات",
          "required": true,
          "minRows": 3,
          "columns": [
            {
              "key": "metric",
              "label": "متري",
              "type": "text",
              "placeholder": "ملء الانحراف المعياري للحجم"
            },
            {
              "key": "baseline",
              "label": "خط الأساس",
              "type": "text",
              "placeholder": "3.8 مل"
            },
            {
              "key": "target",
              "label": "هدف",
              "type": "text",
              "placeholder": "1.5 مل"
            },
            {
              "key": "dataSource",
              "label": "مصدر البيانات",
              "type": "text",
              "placeholder": "ملء المقياس"
            }
          ]
        },
        {
          "key": "team",
          "label": "الفريق الأساسي",
          "type": "table",
          "section": "الفريق والمعالم",
          "required": true,
          "minRows": 3,
          "columns": [
            {
              "key": "name",
              "label": "اسم",
              "type": "text"
            },
            {
              "key": "role",
              "label": "دور",
              "type": "text",
              "placeholder": "الراعي، القائد، المشغل"
            },
            {
              "key": "responsibility",
              "label": "مسؤولية",
              "type": "text"
            }
          ]
        },
        {
          "key": "milestones",
          "label": "المعالم",
          "type": "table",
          "section": "الفريق والمعالم",
          "required": true,
          "minRows": 3,
          "columns": [
            {
              "key": "milestone",
              "label": "منعطف",
              "type": "text",
              "placeholder": "تحديد البوابة"
            },
            {
              "key": "date",
              "label": "Date",
              "type": "date"
            },
            {
              "key": "status",
              "label": "حالة",
              "type": "select",
              "options": [
                "المخطط لها",
                "في تَقَدم",
                "مكتمل",
                "في خطر"
              ]
            }
          ]
        }
      ],
      "example": {
        "projectName": "تقليل تباين تعبئة خط التعبئة",
        "projectLead": "جوردان لي - الحزام الأخضر",
        "sponsor": "بريا شاه - مدير المصنع",
        "startDate": "2026-01-12",
        "targetDate": "2026-06-30",
        "problemStatement": "في الفترة من يناير إلى مارس، أنتج الخط الثاني زجاجات مملوءة بنسبة 4.2% وزجاجات مملوءة بنسبة 2.1%، مما أدى إلى إعادة صياغة وشكاوى العملاء.",
        "businessCase": "يتسبب تباين التعبئة في خسارة سنوية تقدر بـ 84000 دولار في هدايا المنتج وإعادة العمل وأوامر الاستبدال المعجلة.",
        "goalStatement": "تقليل الانحراف المعياري لحجم التعبئة من 3.8 مل إلى 1.5 مل والتخلص من الحشوات الأقل من 499.5 مل بحلول 30 يونيو 2026.",
        "scopeIn": "حشو الخط الثاني، وطريقة التحويل، وفحوصات إعداد المشغل، ومقياس التعبئة، وتسليم ناقل الحركة.",
        "scopeOut": "إعادة تصميم موردي الزجاجات، الخط الأول، التعامل مع المستودعات، وتغييرات التعبئة والتغليف للعملاء.",
        "successMetrics": [
          {
            "metric": "ملء الانحراف المعياري للحجم",
            "baseline": "3.8 مل",
            "target": "1.5 مل",
            "dataSource": "ملء المقياس"
          },
          {
            "metric": "معدل نقص الملء",
            "baseline": "4.2%",
            "target": "0.5%",
            "dataSource": "فحص ضمان الجودة"
          },
          {
            "metric": "تكلفة الهبة السنوية",
            "baseline": "$84,000",
            "target": "$20,000",
            "dataSource": "تقرير المالية"
          }
        ],
        "team": [
          {
            "name": "جوردان لي",
            "role": "قائد المشروع",
            "responsibility": "تنفيذ DMAIC وتسهيل الفريق"
          },
          {
            "name": "بريا شاه",
            "role": "راعي",
            "responsibility": "الموارد والموافقات على البوابة"
          },
          {
            "name": "ماتيو رويز",
            "role": "مشغل الخط",
            "responsibility": "عملية المعرفة وجمع البيانات"
          },
          {
            "name": "أفيري تشين",
            "role": "صيانة",
            "responsibility": "معايرة وإصلاح الحشو"
          }
        ],
        "milestones": [
          {
            "milestone": "تحديد البوابة",
            "date": "2026-01-26",
            "status": "مكتمل"
          },
          {
            "milestone": "بوابة القياس",
            "date": "2026-03-06",
            "status": "في تَقَدم"
          },
          {
            "milestone": "تحسين الطيار",
            "date": "2026-05-15",
            "status": "المخطط لها"
          },
          {
            "milestone": "التحكم في عملية التسليم",
            "date": "2026-06-30",
            "status": "المخطط لها"
          }
        ]
      }
    },
    {
      "id": "sipoc",
      "title": "SIPOC",
      "phase": "Define",
      "minBelt": "white",
      "icon": "fa-diagram-project",
      "estimatedMinutes": 25,
      "description": "خريطة الموردين والمدخلات وخطوات العملية والمخرجات والعملاء على مستوى عالٍ.",
      "fields": [
        {
          "key": "processName",
          "label": "اسم العملية",
          "type": "text",
          "section": "حدود العملية",
          "required": true,
          "wide": true,
          "placeholder": "خط تعبئة الزجاجات 2 عملية التعبئة والغطاء"
        },
        {
          "key": "owner",
          "label": "صاحب العملية",
          "type": "text",
          "section": "حدود العملية"
        },
        {
          "key": "startPoint",
          "label": "يبدأ متى",
          "type": "text",
          "section": "حدود العملية",
          "placeholder": "الزجاجات الفارغة تدخل الحشو"
        },
        {
          "key": "endPoint",
          "label": "ينتهي متى",
          "type": "text",
          "section": "حدود العملية",
          "placeholder": "تدخل الزجاجات المغطاة إلى الملصق"
        },
        {
          "key": "sipocRows",
          "label": "خريطة سيبوك",
          "type": "table",
          "section": "خريطة سيبوك",
          "required": true,
          "minRows": 5,
          "help": "تظهر الصفوف التدفق الرئيسي. يمكن للمورد تغذية أكثر من مدخل واحد ويمكن أن تنتج الخطوة عدة مخرجات.",
          "columns": [
            {
              "key": "supplier",
              "label": "مزود",
              "type": "text",
              "placeholder": "مورد الزجاجة"
            },
            {
              "key": "input",
              "label": "مدخل",
              "type": "text",
              "placeholder": "زجاجة نظيفة 500 مل"
            },
            {
              "key": "step",
              "label": "خطوة العملية",
              "type": "text",
              "placeholder": "ملء الزجاجة"
            },
            {
              "key": "output",
              "label": "الإخراج",
              "type": "text",
              "placeholder": "زجاجة مملوءة"
            },
            {
              "key": "customer",
              "label": "عميل",
              "type": "text",
              "placeholder": "محطة كاب"
            }
          ]
        },
        {
          "key": "notes",
          "label": "ملاحظات الحدود والافتراضات",
          "type": "textarea",
          "section": "خريطة سيبوك",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "processName": "خط تعبئة الزجاجات 2 عملية التعبئة والغطاء",
        "owner": "بريا شاه",
        "startPoint": "الزجاجات الفارغة تدخل الحشو",
        "endPoint": "تدخل الزجاجات المغطاة إلى الملصق",
        "sipocRows": [
          {
            "supplier": "مورد الزجاجة",
            "input": "زجاجة نظيفة 500 مل",
            "step": "Load bottles",
            "output": "تيار زجاجة الانحياز",
            "customer": "حشو"
          },
          {
            "supplier": "خزان المنتج",
            "input": "مشروب منتهي",
            "step": "Fill bottle",
            "output": "زجاجة مملوءة",
            "customer": "محطة كاب"
          },
          {
            "supplier": "مورد كاب",
            "input": "كاب وبطانة",
            "step": "Place and torque cap",
            "output": "زجاجة مغطاة",
            "customer": "اضع علامة"
          },
          {
            "supplier": "صيانة",
            "input": "حشو معايرة",
            "step": "Verify fill weight",
            "output": "ملء سجل التفتيش",
            "customer": "QA"
          },
          {
            "supplier": "QA",
            "input": "معيار أخذ العينات",
            "step": "Release lot",
            "output": "صدر الكثير من الإنتاج",
            "customer": "مستودع"
          }
        ],
        "notes": "يبدأ النطاق بعد تفريغ الزجاجة وينتهي قبل وضع العلامات. يتم تضمين تغييرات خزان المنتج؛ تم استبعاد تصميم زجاجة المورد."
      }
    },
    {
      "id": "voc-sheet",
      "title": "ورقة المركبات العضوية المتطايرة",
      "phase": "Define",
      "minBelt": "yellow",
      "icon": "fa-comments",
      "estimatedMinutes": 30,
      "description": "التقط أصوات العملاء واحتياجاتهم ومصادرهم وأولوياتهم قبل ترجمتها إلى أسئلة CTQs.",
      "fields": [
        {
          "key": "projectName",
          "label": "اسم المشروع",
          "type": "text",
          "section": "نطاق البحث",
          "required": true,
          "wide": true
        },
        {
          "key": "customerSegment",
          "label": "شريحة العملاء",
          "type": "text",
          "section": "نطاق البحث",
          "placeholder": "عملاء تعبئة التجزئة"
        },
        {
          "key": "method",
          "label": "طريقة الجمع",
          "type": "select",
          "section": "نطاق البحث",
          "options": [
            "مقابلات",
            "مجموعة التركيز",
            "استطلاع",
            "الشكاوى",
            "الاستماع الاجتماعي",
            "ملاحظة",
            "مختلط"
          ]
        },
        {
          "key": "sampleSize",
          "label": "تمت مراجعة الأشخاص أو السجلات",
          "type": "number",
          "section": "نطاق البحث",
          "min": 1
        },
        {
          "key": "period",
          "label": "فترة التحصيل",
          "type": "text",
          "section": "نطاق البحث",
          "placeholder": "يناير-مارس 2026"
        },
        {
          "key": "voices",
          "label": "أصوات العملاء",
          "type": "table",
          "section": "صوت العميل",
          "required": true,
          "minRows": 4,
          "columns": [
            {
              "key": "customer",
              "label": "عميل",
              "type": "text",
              "placeholder": "مشتري التجزئة"
            },
            {
              "key": "verbatim",
              "label": "حرفيا أو ملاحظة",
              "type": "text"
            },
            {
              "key": "need",
              "label": "الحاجة الأساسية",
              "type": "text"
            },
            {
              "key": "source",
              "label": "مصدر",
              "type": "text",
              "placeholder": "مقابلة، شكوى"
            },
            {
              "key": "priority",
              "label": "أولوية",
              "type": "select",
              "options": [
                "عالي",
                "واسطة",
                "قليل"
              ]
            }
          ]
        },
        {
          "key": "themes",
          "label": "المواضيع والتداعيات",
          "type": "textarea",
          "section": "توليف",
          "rows": 4,
          "wide": true
        }
      ],
      "example": {
        "projectName": "تقليل تباين تعبئة خط التعبئة",
        "customerSegment": "عملاء تعبئة التجزئة",
        "method": "مختلط",
        "sampleSize": 42,
        "period": "يناير-مارس 2026",
        "voices": [
          {
            "customer": "مشتري التجزئة",
            "verbatim": "تبدو بعض الحالات قصيرة ويشكو العملاء على الرف.",
            "need": "حجم تعبئة ثابت في كل زجاجة",
            "source": "Interview",
            "priority": "عالي"
          },
          {
            "customer": "موزع",
            "verbatim": "نحن نتلقى المزيد من الاعتمادات البديلة للنقص في الملء.",
            "need": "كمية ونوعية حالة موثوقة",
            "source": "Complaint log",
            "priority": "عالي"
          },
          {
            "customer": "مشغل الخط",
            "verbatim": "ينجرف الحشو بعد التغييرات ونقوم بتعديله حسب الشعور.",
            "need": "إعداد التحول المستقر",
            "source": "Observation",
            "priority": "عالي"
          },
          {
            "customer": "مدقق الجودة",
            "verbatim": "اكتملت سجلات التعبئة ولكن أخذ العينات غير متناسق.",
            "need": "فحص يمكن تتبعه ومتسق",
            "source": "Audit",
            "priority": "واسطة"
          }
        ],
        "themes": "يهتم العملاء بتناسق الزجاجة إلى الزجاجة وموثوقية العلبة. يحتاج المشغلون إلى معيار تحويل قابل للتكرار. توجد بيانات الفحص ولكن لا يتم استخدامها بالسرعة الكافية لاكتشاف الانحراف."
      }
    },
    {
      "id": "ctq-tree",
      "title": "شجرة CTQ",
      "phase": "Define",
      "minBelt": "green",
      "icon": "fa-sitemap",
      "estimatedMinutes": 30,
      "description": "ترجمة احتياجات العملاء إلى برامج تشغيل ومتطلبات هامة للجودة ومواصفات قابلة للقياس.",
      "fields": [
        {
          "key": "projectName",
          "label": "اسم المشروع",
          "type": "text",
          "section": "حاجة العملاء",
          "required": true,
          "wide": true
        },
        {
          "key": "customer",
          "label": "العميل الأساسي",
          "type": "text",
          "section": "حاجة العملاء",
          "required": true
        },
        {
          "key": "need",
          "label": "حاجة العملاء",
          "type": "textarea",
          "section": "حاجة العملاء",
          "required": true,
          "rows": 2,
          "wide": true,
          "placeholder": "أحتاج إلى أن تحتوي كل زجاجة على الكمية المذكورة."
        },
        {
          "key": "tree",
          "label": "تدفق CTQ إلى أسفل",
          "type": "table",
          "section": "تدفق CTQ إلى أسفل",
          "required": true,
          "minRows": 4,
          "columns": [
            {
              "key": "need",
              "label": "يحتاج",
              "type": "text"
            },
            {
              "key": "driver",
              "label": "سائق",
              "type": "text"
            },
            {
              "key": "ctq",
              "label": "CTQ",
              "type": "text"
            },
            {
              "key": "measure",
              "label": "Measure",
              "type": "text"
            },
            {
              "key": "spec",
              "label": "مواصفة",
              "type": "text"
            }
          ]
        },
        {
          "key": "validation",
          "label": "التحقق من صحة مع العميل",
          "type": "textarea",
          "section": "تصديق",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "projectName": "تقليل تباين تعبئة خط التعبئة",
        "customer": "عميل تعبئة التجزئة",
        "need": "أحتاج إلى أن تحتوي كل زجاجة على الكمية المذكورة وأن تصل في علبة نظيفة وغير تالفة.",
        "tree": [
          {
            "need": "المبلغ الصحيح",
            "driver": "تعبئة دقيقة",
            "ctq": "ملء الحجم ضمن التسامح",
            "measure": "ملء الحجم في مل",
            "spec": "499.5-500.7 مل"
          },
          {
            "need": "المبلغ الصحيح",
            "driver": "حشو مستقر",
            "ctq": "تباين تعبئة منخفض",
            "measure": "الانحراف المعياري",
            "spec": "<= 1.5 مل"
          },
          {
            "need": "لا تسربات",
            "driver": "سلامة الغطاء",
            "ctq": "غطاء عزم الدوران في النطاق",
            "measure": "عزم الدوران في N سم",
            "spec": "18-24 ن سم"
          },
          {
            "need": "حالة نظيفة",
            "driver": "لا يوجد انسكابات",
            "ctq": "لا بقايا المنتج",
            "measure": "العيوب البصرية لكل حالة",
            "spec": "0 عيوب"
          }
        ],
        "validation": "تم تأكيده في المراجعة الربع سنوية للعملاء. صنف العميل اتساق التعبئة أولاً ونظافة الحالة ثانيًا."
      }
    },
    {
      "id": "data-collection-plan",
      "title": "خطة جمع البيانات",
      "phase": "Measure",
      "minBelt": "yellow",
      "icon": "fa-clipboard-list",
      "estimatedMinutes": 35,
      "description": "حدد ما يجب قياسه، وكيفية قياسه، ومن يجمعه، وكيف سيتم حماية جودة القياس.",
      "fields": [
        {
          "key": "projectName",
          "label": "اسم المشروع",
          "type": "text",
          "section": "ملكية الخطة",
          "required": true,
          "wide": true
        },
        {
          "key": "owner",
          "label": "مالك البيانات",
          "type": "text",
          "section": "ملكية الخطة"
        },
        {
          "key": "startDate",
          "label": "بداية التجميع",
          "type": "date",
          "section": "ملكية الخطة"
        },
        {
          "key": "endDate",
          "label": "نهاية التجميع",
          "type": "date",
          "section": "ملكية الخطة"
        },
        {
          "key": "measures",
          "label": "مقاسات",
          "type": "table",
          "section": "التدابير والأساليب",
          "required": true,
          "minRows": 4,
          "columns": [
            {
              "key": "measure",
              "label": "Measure",
              "type": "text"
            },
            {
              "key": "definition",
              "label": "التعريف التشغيلي",
              "type": "text"
            },
            {
              "key": "type",
              "label": "نوع البيانات",
              "type": "select",
              "options": [
                "مستمر",
                "يصف",
                "ترتيبي"
              ]
            },
            {
              "key": "method",
              "label": "طريقة الجمع",
              "type": "text"
            },
            {
              "key": "frequency",
              "label": "تكرار",
              "type": "text"
            },
            {
              "key": "sampleSize",
              "label": "حجم العينة",
              "type": "text"
            },
            {
              "key": "owner",
              "label": "جامع",
              "type": "text"
            }
          ]
        },
        {
          "key": "integrity",
          "label": "سلامة البيانات والتحقق من نظام القياس",
          "type": "textarea",
          "section": "ضوابط الجودة",
          "rows": 3,
          "wide": true
        },
        {
          "key": "risks",
          "label": "مخاطر التحصيل والطوارئ",
          "type": "textarea",
          "section": "ضوابط الجودة",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "projectName": "تقليل تباين تعبئة خط التعبئة",
        "owner": "جوردان لي",
        "startDate": "2026-01-19",
        "endDate": "2026-02-27",
        "measures": [
          {
            "measure": "حجم التعبئة",
            "definition": "يتم قياس صافي حجم المنتج بواسطة مقياس التعبئة المعاير عند مخرج الحشو",
            "type": "Continuous",
            "method": "تصدير المقياس الآلي",
            "frequency": "كل 15 دقيقة",
            "sampleSize": "20 زجاجة متتالية لكل وردية",
            "owner": "مشغل الخط"
          },
          {
            "measure": "معدل نقص الملء",
            "definition": "الزجاجات التي يقل حجمها عن 499.5 مل مقسمة حسب الزجاجات التي تم فحصها",
            "type": "Attribute",
            "method": "أخذ عينات ضمان الجودة",
            "frequency": "كل ساعة",
            "sampleSize": "12 زجاجة",
            "owner": "فني ضمان الجودة"
          },
          {
            "measure": "مدة التحول",
            "definition": "دقائق من آخر زجاجة جيدة إلى أول زجاجة جيدة بعد التغيير",
            "type": "Continuous",
            "method": "سجل التحول",
            "frequency": "كل تبديل",
            "sampleSize": "جميع التحولات",
            "owner": "تحول الرصاص"
          },
          {
            "measure": "عدد تعديلات المشغل",
            "definition": "عدد تعديلات الحشو التي تم إجراؤها أثناء الوردية",
            "type": "Attribute",
            "method": "ورقة الملاحظة",
            "frequency": "كل التحول",
            "sampleSize": "جميع التحولات",
            "owner": "عضو فريق"
          }
        ],
        "integrity": "تحقق من مقياس التعبئة مقابل وزن فحص معتمد قدره 500 مل في بداية كل نوبة. يجمع مراقبان الأسبوع الأول بالتوازي. تجميد سجل معايرة المقياس للدراسة.",
        "risks": "قد ينجرف المقياس أثناء الدراسة. ستقوم الصيانة بفحص المعايرة أسبوعيًا. في حالة غياب فني ضمان الجودة، يستخدم قائد النقل مجموعة أدوات أخذ العينات الاحتياطية."
      }
    },
    {
      "id": "fishbone",
      "title": "مخطط هيكل السمكة",
      "phase": "Analyze",
      "minBelt": "yellow",
      "icon": "fa-fish",
      "estimatedMinutes": 30,
      "description": "قم بالعصف الذهني وتنظيم الأسباب المحتملة عبر فئات الستة ملايين قبل اختبارها بالبيانات.",
      "fields": [
        {
          "key": "problem",
          "label": "بيان التأثير أو المشكلة",
          "type": "textarea",
          "section": "مشكلة",
          "required": true,
          "rows": 2,
          "wide": true,
          "placeholder": "يختلف حجم التعبئة بما يتجاوز مواصفات 499.5-500.7 مل."
        },
        {
          "key": "team",
          "label": "فريق العصف الذهني",
          "type": "text",
          "section": "مشكلة",
          "placeholder": "المشغلين، الصيانة، ضمان الجودة، المشرف"
        },
        {
          "key": "sessionDate",
          "label": "تاريخ الجلسة",
          "type": "date",
          "section": "مشكلة"
        },
        {
          "key": "causes",
          "label": "أسباب المرشح",
          "type": "table",
          "section": "6M الأسباب",
          "required": true,
          "minRows": 8,
          "columns": [
            {
              "key": "category",
              "label": "فئة",
              "type": "select",
              "options": [
                "رجل",
                "آلة",
                "مادة",
                "طريقة",
                "قياس",
                "الطبيعة الأم"
              ]
            },
            {
              "key": "cause",
              "label": "السبب المحتمل",
              "type": "text"
            },
            {
              "key": "evidence",
              "label": "دليل أو سؤال",
              "type": "text"
            },
            {
              "key": "priority",
              "label": "أولوية",
              "type": "select",
              "options": [
                "عالي",
                "واسطة",
                "قليل"
              ]
            }
          ]
        },
        {
          "key": "rootCauses",
          "label": "الأسباب المختارة للتحقق",
          "type": "textarea",
          "section": "خطة التحقق",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "problem": "يختلف حجم التعبئة بما يتجاوز مواصفات 499.5-500.7 مل، مما يؤدي إلى ملء ناقص وهدية للمنتج.",
        "team": "المشغلين، الصيانة، ضمان الجودة، المشرف",
        "sessionDate": "2026-02-12",
        "causes": [
          {
            "category": "رجل",
            "cause": "يقوم المشغلون بضبط مادة الحشو من خلال الشعور بها بعد التغيير",
            "evidence": "لا توجد طريقة تعديل قياسية",
            "priority": "عالي"
          },
          {
            "category": "آلة",
            "cause": "ارتداء صمام الحشو",
            "evidence": "تم استبدال الصمام 4 مرتين في العام الماضي",
            "priority": "عالي"
          },
          {
            "category": "مادة",
            "cause": "يختلف ارتفاع الزجاجة حسب كمية المورد",
            "evidence": "يُظهر الفحص الوارد نطاقًا يبلغ 0.6 مم",
            "priority": "واسطة"
          },
          {
            "category": "طريقة",
            "cause": "وقت تطهير التغيير غير موحد",
            "evidence": "أوقات التطهير المرصودة من 4 إلى 11 دقيقة",
            "priority": "عالي"
          },
          {
            "category": "قياس",
            "cause": "لم يتم فحص مقياس الملء في كل وردية",
            "evidence": "سجل المعايرة به ثغرات",
            "priority": "واسطة"
          },
          {
            "category": "الطبيعة الأم",
            "cause": "درجة حرارة المنتج تغير اللزوجة",
            "evidence": "تظهر جولات ما بعد الظهر المزيد من الاختلاف",
            "priority": "واسطة"
          }
        ],
        "rootCauses": "تحقق من وقت تطهير التغيير، وطريقة ضبط المشغل، وحالة صمام الحشو، ودرجة حرارة المنتج باستخدام بيانات الخط. لا تحدد السبب الجذري حتى تتم مراجعة البيانات."
      }
    },
    {
      "id": "five-whys",
      "title": "5 لماذا",
      "phase": "Analyze",
      "minBelt": "white",
      "icon": "fa-circle-question",
      "estimatedMinutes": 20,
      "description": "انتقل من مشكلة محددة إلى السبب الجذري الذي تم التحقق منه والإجراء المضاد.",
      "fields": [
        {
          "key": "problem",
          "label": "بيان المشكلة",
          "type": "textarea",
          "section": "مشكلة",
          "required": true,
          "rows": 2,
          "wide": true
        },
        {
          "key": "containment",
          "label": "إجراءات الاحتواء",
          "type": "textarea",
          "section": "مشكلة",
          "rows": 2,
          "wide": true
        },
        {
          "key": "why1",
          "label": "لماذا 1",
          "type": "textarea",
          "section": "لماذا السلسلة",
          "rows": 2,
          "wide": true
        },
        {
          "key": "why2",
          "label": "لماذا 2",
          "type": "textarea",
          "section": "لماذا السلسلة",
          "rows": 2,
          "wide": true
        },
        {
          "key": "why3",
          "label": "لماذا 3",
          "type": "textarea",
          "section": "لماذا السلسلة",
          "rows": 2,
          "wide": true
        },
        {
          "key": "why4",
          "label": "لماذا 4",
          "type": "textarea",
          "section": "لماذا السلسلة",
          "rows": 2,
          "wide": true
        },
        {
          "key": "why5",
          "label": "لماذا 5",
          "type": "textarea",
          "section": "لماذا السلسلة",
          "rows": 2,
          "wide": true
        },
        {
          "key": "rootCause",
          "label": "تم التحقق من السبب الجذري",
          "type": "textarea",
          "section": "فعل",
          "required": true,
          "rows": 3,
          "wide": true,
          "help": "قم بتأكيد السبب بالأدلة، وليس فقط بإجماع المجموعة."
        },
        {
          "key": "countermeasure",
          "label": "الإجراء المضاد",
          "type": "textarea",
          "section": "فعل",
          "required": true,
          "rows": 3,
          "wide": true
        },
        {
          "key": "owner",
          "label": "صاحب الفعل",
          "type": "text",
          "section": "فعل"
        },
        {
          "key": "dueDate",
          "label": "تاريخ الاستحقاق",
          "type": "date",
          "section": "فعل"
        },
        {
          "key": "verification",
          "label": "تَحَقّق",
          "type": "textarea",
          "section": "فعل",
          "rows": 2,
          "wide": true
        }
      ],
      "example": {
        "problem": "أنتج الخط الثاني زجاجات غير مملوءة بنسبة 4.2% خلال الوردية الأولى في يناير.",
        "containment": "تم عزل جميع القطع المشبوهة وإعادة تفتيشها. تم إيقاف الحشو أثناء قيام الفريق بمراجعة الإعداد.",
        "why1": "لم يكن الحشو يسلم الحجم المستهدف في بداية التشغيل.",
        "why2": "لم تتم إزالة الحشو لفترة كافية بعد تغيير المنتج.",
        "why3": "لا يحدد معيار التحول وقت التطهير.",
        "why4": "تمت كتابة المعيار قبل طرح تركيبة المنتج الجديد.",
        "why5": "لم تتطلب عملية التحكم في التغيير مراجعة معيار إعداد الحشو عند تغير اللزوجة.",
        "rootCause": "لم يتم تحديث معيار التغيير بعد تغيير تركيبة المنتج، مما يسمح بأوقات تطهير غير متناسقة.",
        "countermeasure": "أضف أوقات التطهير الخاصة بالمنتج وفحص زجاجة التحقق إلى معيار التغيير.",
        "owner": "ماتيو رويز",
        "dueDate": "2026-03-20",
        "verification": "قم بمراجعة التغييرات العشرة التالية وتأكد من أن الزجاجة الأولى تلبي هدف التعبئة قبل إصدار الإنتاج."
      }
    },
    {
      "id": "pareto",
      "title": "تحليل باريتو",
      "phase": "Analyze",
      "minBelt": "yellow",
      "icon": "fa-chart-column",
      "estimatedMinutes": 25,
      "description": "قم بتصنيف فئات العيوب أو المشكلات وفصل القلة الحيوية عن الكثيرة المفيدة.",
      "fields": [
        {
          "key": "problem",
          "label": "المسألة قيد التحليل",
          "type": "text",
          "section": "مصدر البيانات",
          "required": true,
          "wide": true,
          "placeholder": "عيوب خطوط التعبئة، يناير-مارس 2026"
        },
        {
          "key": "dataSource",
          "label": "مصدر البيانات",
          "type": "text",
          "section": "مصدر البيانات",
          "placeholder": "سجل عيوب ضمان الجودة"
        },
        {
          "key": "period",
          "label": "فترة",
          "type": "text",
          "section": "مصدر البيانات",
          "placeholder": "يناير-مارس 2026"
        },
        {
          "key": "counts",
          "label": "أعداد الفئات",
          "type": "table",
          "section": "أعداد الفئات",
          "required": true,
          "minRows": 6,
          "sortBy": "عدد",
          "sortLabel": "الترتيب حسب العدد",
          "help": "أدخل الأعداد، ثم قم بالفرز تنازليًا. يتم احتساب الحصة والنسبة التراكمية تلقائيا.",
          "columns": [
            {
              "key": "category",
              "label": "فئة",
              "type": "text",
              "placeholder": "نقص الملء"
            },
            {
              "key": "count",
              "label": "عدد",
              "type": "number",
              "min": 0,
              "step": 1
            },
            {
              "key": "share",
              "label": "يشارك",
              "compute": {
                "op": "percentOfTotal",
                "field": "عدد"
              }
            },
            {
              "key": "cumulative",
              "label": "تراكمي",
              "compute": {
                "op": "النسبة التراكمية",
                "field": "عدد"
              }
            }
          ]
        },
        {
          "key": "conclusion",
          "label": "الاستنتاج والتركيز",
          "type": "textarea",
          "section": "خاتمة",
          "rows": 3,
          "wide": true,
          "help": "حدد الفئات القليلة التي تمثل حوالي 80% من الإجمالي."
        }
      ],
      "example": {
        "problem": "عيوب خطوط التعبئة، يناير-مارس 2026",
        "dataSource": "سجل عيوب ضمان الجودة",
        "period": "يناير-مارس 2026",
        "counts": [
          {
            "category": "نقص الملء",
            "count": 86
          },
          {
            "category": "اختلال التسمية",
            "count": 24
          },
          {
            "category": "كاب عزم الدوران",
            "count": 18
          },
          {
            "category": "تلف الختم",
            "count": 11
          },
          {
            "category": "الفائض",
            "count": 9
          },
          {
            "category": "زجاجة قذرة",
            "count": 4
          }
        ],
        "conclusion": "تعد فئة الملء السفلي أكبر فئة، وتمثل، جنبًا إلى جنب مع اختلال الملصق وعزم دوران الغطاء، معظم عدد العيوب. ركز دورة التحسين الأولى على نقص الملء."
      }
    },
    {
      "id": "fmea",
      "title": "FMEA",
      "phase": "Analyze",
      "minBelt": "green",
      "icon": "fa-triangle-exclamation",
      "estimatedMinutes": 45,
      "description": "تحديد أولويات أوضاع الفشل حسب الخطورة والحدث والكشف، باستخدام حساب RPN التلقائي.",
      "fields": [
        {
          "key": "processName",
          "label": "العملية أو المنتج",
          "type": "text",
          "section": "نطاق الدراسة",
          "required": true,
          "wide": true
        },
        {
          "key": "team",
          "label": "فريق FMEA",
          "type": "text",
          "section": "نطاق الدراسة"
        },
        {
          "key": "reviewDate",
          "label": "تاريخ المراجعة",
          "type": "date",
          "section": "نطاق الدراسة"
        },
        {
          "key": "scope",
          "label": "النطاق والافتراضات",
          "type": "textarea",
          "section": "نطاق الدراسة",
          "rows": 2,
          "wide": true
        },
        {
          "key": "failures",
          "label": "أوضاع الفشل",
          "type": "table",
          "section": "أوضاع الفشل",
          "required": true,
          "minRows": 5,
          "help": "معدل الخطورة والتكرار والكشف من 1 إلى 10. RPN = S x O x D ويتم تحديثه تلقائيًا. يتم تمييز RPN 200 أو أعلى باللون الأحمر؛ 100-199 العنبر.",
          "columns": [
            {
              "key": "step",
              "label": "خطوة العملية",
              "type": "text"
            },
            {
              "key": "failure",
              "label": "وضع الفشل",
              "type": "text"
            },
            {
              "key": "effect",
              "label": "تأثير",
              "type": "text"
            },
            {
              "key": "severity",
              "label": "S",
              "type": "number",
              "min": 1,
              "max": 10,
              "step": 1,
              "width": "58 بكسل"
            },
            {
              "key": "occurrence",
              "label": "O",
              "type": "number",
              "min": 1,
              "max": 10,
              "step": 1,
              "width": "58 بكسل"
            },
            {
              "key": "detection",
              "label": "D",
              "type": "number",
              "min": 1,
              "max": 10,
              "step": 1,
              "width": "58 بكسل"
            },
            {
              "key": "rpn",
              "label": "RPN",
              "compute": {
                "op": "ضاعف",
                "fields": [
                  "خطورة",
                  "حدوث",
                  "كشف"
                ]
              },
              "thresholds": {
                "high": 200,
                "medium": 100
              },
              "width": "72 بكسل"
            },
            {
              "key": "action",
              "label": "الإجراء الموصى به",
              "type": "text"
            },
            {
              "key": "owner",
              "label": "مالك",
              "type": "text"
            },
            {
              "key": "status",
              "label": "حالة",
              "type": "select",
              "options": [
                "يفتح",
                "في تَقَدم",
                "مكتمل"
              ]
            }
          ]
        },
        {
          "key": "actions",
          "label": "الإجراءات ذات الأولوية وملاحظات المراجعة",
          "type": "textarea",
          "section": "خطة العمل",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "processName": "خط تعبئة 2 تعبئة وغطاء",
        "team": "الصيانة، المشغلين، ضمان الجودة، الهندسة",
        "reviewDate": "2026-02-20",
        "scope": "ركز على خطوات التعبئة والغطاء والتغيير. التعبئة والتغليف والتحزيم خارج نطاق هذه المراجعة.",
        "failures": [
          {
            "step": "Fill bottle",
            "failure": "نقص الملء",
            "effect": "شكوى العملاء وإعادة العمل",
            "severity": 8,
            "occurrence": 6,
            "detection": 4,
            "action": "قم بتثبيت معيار التطهير الخاص بالمنتج والتحقق من الزجاجة الأولى",
            "owner": "جوردان لي",
            "status": "في تَقَدم"
          },
          {
            "step": "Fill bottle",
            "failure": "الفائض",
            "effect": "الهبة المنتج والانسكاب",
            "severity": 5,
            "occurrence": 4,
            "detection": 3,
            "action": "إضافة إنذار اتجاه حجم التعبئة التلقائي",
            "owner": "أفيري تشين",
            "status": "يفتح"
          },
          {
            "step": "Place cap",
            "failure": "عزم دوران منخفض",
            "effect": "تسرب أثناء النقل",
            "severity": 9,
            "occurrence": 3,
            "detection": 5,
            "action": "أضف التحقق من عزم الدوران كل 30 دقيقة",
            "owner": "فني ضمان الجودة",
            "status": "يفتح"
          },
          {
            "step": "Changeover",
            "failure": "تم تحديد وصفة حشو خاطئة",
            "effect": "حجم تعبئة خاطئ للتشغيل بأكمله",
            "severity": 8,
            "occurrence": 2,
            "detection": 2,
            "action": "أضف تعشيق مسح الوصفة قبل البدء",
            "owner": "هندسة",
            "status": "يفتح"
          },
          {
            "step": "Fill bottle",
            "failure": "صمام التعبئة البالية",
            "effect": "حجم غير متناسق عبر الفوهات",
            "severity": 7,
            "occurrence": 4,
            "detection": 6,
            "action": "أضف فحص تآكل الصمام إلى الصيانة الوقائية",
            "owner": "صيانة",
            "status": "يفتح"
          }
        ],
        "actions": "قم بإعطاء الأولوية لمعايير التعشيق ذات الوصفة الخاطئة والتطهير الناقص لأنها تجمع بين الخطورة العالية والكشف الضعيف. إعادة تسجيل FMEA بعد الطيار."
      }
    },
    {
      "id": "solution-matrix",
      "title": "مصفوفة الحل",
      "phase": "Improve",
      "minBelt": "green",
      "icon": "fa-table-cells-large",
      "estimatedMinutes": 30,
      "description": "قارن الحلول المرشحة بالتأثير والجدوى والتكلفة والمخاطر باستخدام درجة شفافة.",
      "fields": [
        {
          "key": "problem",
          "label": "مشكلة أم فرصة",
          "type": "text",
          "section": "سياق القرار",
          "required": true,
          "wide": true
        },
        {
          "key": "decisionOwner",
          "label": "صاحب القرار",
          "type": "text",
          "section": "سياق القرار"
        },
        {
          "key": "decisionDate",
          "label": "تاريخ القرار",
          "type": "date",
          "section": "سياق القرار"
        },
        {
          "key": "criteria",
          "label": "توجيه التهديف",
          "type": "textarea",
          "section": "سياق القرار",
          "rows": 2,
          "wide": true,
          "help": "استخدم مقياسًا من 1 إلى 5 لكل معيار. المجموع يعطي وزنا متساويا لكل معيار؛ اضبط المناقشة إذا كان الفريق يستخدم أوزانًا مختلفة."
        },
        {
          "key": "solutions",
          "label": "حلول المرشحين",
          "type": "table",
          "section": "سجل الحل",
          "required": true,
          "minRows": 4,
          "help": "سجل التأثير والجدوى والتكلفة والمخاطر من 1 (ضعيف) إلى 5 (ممتاز). يتم حساب الإجمالي تلقائيا.",
          "columns": [
            {
              "key": "solution",
              "label": "حل",
              "type": "text"
            },
            {
              "key": "impact",
              "label": "تأثير",
              "type": "number",
              "min": 1,
              "max": 5,
              "step": 1,
              "width": "78 بكسل"
            },
            {
              "key": "feasibility",
              "label": "الجدوى",
              "type": "number",
              "min": 1,
              "max": 5,
              "step": 1,
              "width": "78 بكسل"
            },
            {
              "key": "cost",
              "label": "يكلف",
              "type": "number",
              "min": 1,
              "max": 5,
              "step": 1,
              "width": "78 بكسل"
            },
            {
              "key": "risk",
              "label": "مخاطرة",
              "type": "number",
              "min": 1,
              "max": 5,
              "step": 1,
              "width": "78 بكسل"
            },
            {
              "key": "total",
              "label": "المجموع",
              "compute": {
                "op": "مجموع",
                "fields": [
                  "تأثير",
                  "الجدوى",
                  "يكلف",
                  "مخاطرة"
                ]
              },
              "thresholds": {
                "high": 17,
                "medium": 13
              },
              "tone": "جيد",
              "width": "72 بكسل"
            },
            {
              "key": "decision",
              "label": "قرار",
              "type": "select",
              "options": [
                "مختارة",
                "طيار",
                "يمسك",
                "مرفوض"
              ]
            }
          ]
        },
        {
          "key": "rationale",
          "label": "مبرر القرار",
          "type": "textarea",
          "section": "قرار",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "problem": "تقليل تباين التحول والملء الناقص على السطر 2.",
        "decisionOwner": "بريا شاه",
        "decisionDate": "2026-04-10",
        "criteria": "يعكس التأثير تقليل العيوب المتوقع. الجدوى تعكس التوقف والمهارات. التكلفة تعكس نفقات التنفيذ. تعكس المخاطر السلامة والتعرض لجودة المنتج.",
        "solutions": [
          {
            "solution": "معيار التطهير الخاص بالمنتج",
            "impact": 5,
            "feasibility": 5,
            "cost": 5,
            "risk": 4,
            "decision": "مختارة"
          },
          {
            "solution": "إنذار اتجاه التعبئة التلقائي",
            "impact": 4,
            "feasibility": 3,
            "cost": 3,
            "risk": 4,
            "decision": "طيار"
          },
          {
            "solution": "استبدل جميع صمامات الحشو",
            "impact": 4,
            "feasibility": 2,
            "cost": 1,
            "risk": 3,
            "decision": "يمسك"
          },
          {
            "solution": "إضافة فحص المشغل الثاني",
            "impact": 2,
            "feasibility": 4,
            "cost": 4,
            "risk": 3,
            "decision": "مرفوض"
          }
        ],
        "rationale": "يتمتع معيار التطهير بأفضل توازن بين التأثير والجدوى والتكلفة والمخاطر. يعد إنذار الاتجاه مرحلة ثانية مفيدة إذا أظهرت النتائج التجريبية انحرافًا بين عمليات التفتيش."
      }
    },
    {
      "id": "control-plan",
      "title": "خطة التحكم",
      "phase": "Control",
      "minBelt": "green",
      "icon": "fa-sliders",
      "estimatedMinutes": 40,
      "description": "قم بتوثيق كيفية مراقبة العملية المحسنة ومن يستجيب وماذا يحدث عند حدوث إشارة.",
      "fields": [
        {
          "key": "processName",
          "label": "اسم العملية",
          "type": "text",
          "section": "ملكية الخطة",
          "required": true,
          "wide": true
        },
        {
          "key": "owner",
          "label": "صاحب العملية",
          "type": "text",
          "section": "ملكية الخطة"
        },
        {
          "key": "effectiveDate",
          "label": "تاريخ النفاذ",
          "type": "date",
          "section": "ملكية الخطة"
        },
        {
          "key": "revision",
          "label": "المراجعة",
          "type": "text",
          "section": "ملكية الخطة",
          "placeholder": "1.0"
        },
        {
          "key": "controls",
          "label": "عناصر التحكم",
          "type": "table",
          "section": "عناصر التحكم",
          "required": true,
          "minRows": 5,
          "columns": [
            {
              "key": "step",
              "label": "خطوة العملية",
              "type": "text"
            },
            {
              "key": "item",
              "label": "عنصر التحكم",
              "type": "text"
            },
            {
              "key": "spec",
              "label": "مواصفة",
              "type": "text"
            },
            {
              "key": "method",
              "label": "طريقة التحكم",
              "type": "text"
            },
            {
              "key": "frequency",
              "label": "تكرار",
              "type": "text"
            },
            {
              "key": "owner",
              "label": "مالك",
              "type": "text"
            },
            {
              "key": "reaction",
              "label": "خطة رد الفعل",
              "type": "text"
            }
          ]
        },
        {
          "key": "monitoring",
          "label": "ملاحظات الرصد والتصعيد",
          "type": "textarea",
          "section": "يراقب",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "processName": "عملية تعبئة خط تعبئة 2",
        "owner": "بريا شاه",
        "effectiveDate": "2026-06-01",
        "revision": "1.0",
        "controls": [
          {
            "step": "Changeover",
            "item": "وقت التطهير",
            "spec": "المنتج أ: 8 دقائق",
            "method": "قائمة التحقق من الإعداد وفحص الزجاجة الأولى",
            "frequency": "كل تبديل",
            "owner": "مشغل الخط",
            "reaction": "خط التوقف؛ كرر التطهير؛ إخطار الرصاص التحول"
          },
          {
            "step": "Fill",
            "item": "حجم التعبئة",
            "spec": "499.5-500.7 مل",
            "method": "ملء المقياس وعينة ضمان الجودة كل ساعة",
            "frequency": "كل 15 دقيقة",
            "owner": "مشغل الخط",
            "reaction": "ضبط الحشو؛ الحجر الصحي منذ آخر فحص جيد"
          },
          {
            "step": "Cap",
            "item": "كاب عزم الدوران",
            "spec": "18-24 ن سم",
            "method": "اختبار عزم الدوران",
            "frequency": "كل 30 دقيقة",
            "owner": "فني ضمان الجودة",
            "reaction": "استبدال رأس الغطاء؛ إعادة الاختبار؛ عقد المنتج"
          },
          {
            "step": "Measurement",
            "item": "ملء معايرة المقياس",
            "spec": "ضمن 0.2 مل من الوزن الاختياري",
            "method": "وزن فحص معتمد",
            "frequency": "بداية التحول",
            "owner": "تحول الرصاص",
            "reaction": "إعادة معايرة أو إزالة المقياس من الخدمة"
          },
          {
            "step": "Response",
            "item": "إنذار الاتجاه",
            "spec": "ثلاث نقاط متتالية على جانب واحد من المركز",
            "method": "مراجعة مخطط SPC",
            "frequency": "كل التحول",
            "owner": "صاحب العملية",
            "reaction": "فتح التحقيق ومراجعة سجل الصيانة"
          }
        ],
        "monitoring": "يقوم مالك العملية بمراجعة لوحة معلومات SPC يوميًا. تؤدي الإشارة المتكررة إلى فحص الاحتواء لمدة 30 دقيقة. قم بالتصعيد إلى مدير المصنع في حالة حدوث إشارتين في أسبوع واحد."
      }
    },
    {
      "id": "project-closure",
      "title": "قائمة مراجعة إغلاق المشروع",
      "phase": "Control",
      "minBelt": "green",
      "icon": "fa-clipboard-check",
      "estimatedMinutes": 25,
      "description": "قم بتأكيد النتائج والتسليم والوثائق والدروس المستفادة قبل إغلاق المشروع.",
      "fields": [
        {
          "key": "projectName",
          "label": "اسم المشروع",
          "type": "text",
          "section": "ملخص المشروع",
          "required": true,
          "wide": true
        },
        {
          "key": "projectLead",
          "label": "قائد المشروع",
          "type": "text",
          "section": "ملخص المشروع"
        },
        {
          "key": "sponsor",
          "label": "راعي",
          "type": "text",
          "section": "ملخص المشروع"
        },
        {
          "key": "closureDate",
          "label": "تاريخ الإغلاق",
          "type": "date",
          "section": "ملخص المشروع"
        },
        {
          "key": "resultsSummary",
          "label": "ملخص النتائج",
          "type": "textarea",
          "section": "نتائج",
          "required": true,
          "rows": 3,
          "wide": true,
          "placeholder": "خط الأساس والهدف والنتيجة الفعلية والمنفعة المالية."
        },
        {
          "key": "lessonsLearned",
          "label": "الدروس المستفادة",
          "type": "textarea",
          "section": "نتائج",
          "required": true,
          "rows": 3,
          "wide": true
        },
        {
          "key": "closureChecklist",
          "label": "قائمة التحقق من الإغلاق",
          "type": "checklist",
          "section": "قائمة التحقق من الإغلاق",
          "required": true,
          "items": [
            "تم استيفاء أهداف المشروع وأحكام CTQ",
            "تم التحقق من صحة نتائج التحسين مع البيانات",
            "خطة التحكم نشطة ومملوكة",
            "تم تحديث وثائق العملية والتدريب",
            "تم التحقق من الفوائد المالية مع المالية",
            "تم التقاط الدروس المستفادة ومشاركتها",
            "اكتمل التعرف على الفريق والراعي",
            "وافق الراعي على إغلاق المشروع"
          ]
        },
        {
          "key": "signoff",
          "label": "تسجيل خروج",
          "type": "table",
          "section": "تسجيل خروج",
          "required": true,
          "minRows": 3,
          "columns": [
            {
              "key": "role",
              "label": "دور",
              "type": "text",
              "placeholder": "راعي"
            },
            {
              "key": "name",
              "label": "اسم",
              "type": "text"
            },
            {
              "key": "date",
              "label": "Date",
              "type": "date"
            },
            {
              "key": "status",
              "label": "حالة",
              "type": "select",
              "options": [
                "قيد الانتظار",
                "وقعت"
              ]
            }
          ]
        }
      ],
      "example": {
        "projectName": "تقليل تباين تعبئة خط التعبئة",
        "projectLead": "جوردان لي",
        "sponsor": "بريا شاه",
        "closureDate": "2026-06-28",
        "resultsSummary": "انخفض الانحراف المعياري للملء من 3.8 مل إلى 1.3 مل، متجاوزًا هدف 1.5 مل. وانخفض معدل الملء من 4.2% إلى 0.3%. تحقق التمويل من فائدة سنوية قدرها 61000 دولار.",
        "lessonsLearned": "كان معيار التغيير هو أعلى مستوى من التحكم في الرافعة المالية. أدى إشراك المشغلين في البرنامج التجريبي إلى تحسين عملية الاعتماد. كان من الممكن أن يؤدي التحقق المبكر من المقياس إلى تقصير مرحلة القياس.",
        "closureChecklist": [
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          false
        ],
        "signoff": [
          {
            "role": "قائد المشروع",
            "name": "جوردان لي",
            "date": "2026-06-28",
            "status": "وقعت"
          },
          {
            "role": "صاحب العملية",
            "name": "بريا شاه",
            "date": "2026-06-28",
            "status": "وقعت"
          },
          {
            "role": "تمويل",
            "name": "دانا بروكس",
            "date": "2026-06-27",
            "status": "وقعت"
          }
        ]
      }
    }
  ]
};
    if (typeof module === "object" && module.exports) module.exports = catalog;
    root.RESOURCE_CATALOG = catalog;
}(typeof globalThis !== "undefined" ? globalThis : this));
