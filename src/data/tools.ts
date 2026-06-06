export type ToolCategory =
  | "ide"
  | "forstudie"
  | "projektstart"
  | "planering"
  | "genomforande"
  | "avslut";

export interface ToolTemplate {
  file: string;
  label: string;
}

export interface ProjectTool {
  id: string;
  name: string;
  category: ToolCategory;
  shortDescription: string;
  description: string;
  whenToUse: string;
  howToUse: string;
  icon: string;
  linkUrl?: string;
  linkLabel?: string;
  templates?: ToolTemplate[];
}

export const categories: Record<ToolCategory, { label: string; color: string }> = {
  ide: { label: "Projektidé / Behov", color: "forest" },
  forstudie: { label: "Förstudie / Analys", color: "steel" },
  projektstart: { label: "Projektstart", color: "mine" },
  planering: { label: "Planering", color: "primary" },
  genomforande: { label: "Genomförande", color: "accent" },
  avslut: { label: "Avslut / Lärande", color: "secondary" },
};

export const tools: ProjectTool[] = [
  {
    id: "frageteknik",
    name: "Frågeteknik på nytt",
    category: "ide",
    shortDescription: "Handlar inte enbart om att ställa frågor – utan också om att lyssna aktivt.",
    description: "Ett verktyg för att utveckla din förmåga att ställa rätt frågor och samtidigt lyssna aktivt – grunden för bra dialog, förståelse och samarbete.",
    whenToUse: "I möten, samtal och workshops där du behöver skapa förståelse, engagemang eller hitta lösningar tillsammans.",
    howToUse: "Använd öppna frågor, följdfrågor och aktivt lyssnande. Bekräfta det du hör och undvik att avbryta eller styra svaret.",
    icon: "HelpCircle",
    templates: [
      { file: "templates/01_-_Frageteknik_pa_nytt.docx", label: "Ladda ner instruktionerna för Frågeteknik" },
    ],
  },
  {
    id: "afs-assistenten",
    name: "AFS-assistenten",
    category: "ide",
    shortDescription: "Digitalt stöd för att söka och citera ur AFS-föreskrifterna.",
    description: "Ett digitalt stöd som hjälper projektledaren att snabbt söka, hitta och citera relevant information ur Arbetsmiljöverkets föreskrifter (AFS).",
    whenToUse: "När du behöver säkerställa att projektet följer gällande arbetsmiljöregler.",
    howToUse: "Ställ frågor direkt i assistenten om riskområden eller föreskrifter för att få precisa citat och hänvisningar.\n",
    icon: "BookOpen",
    linkUrl: "https://chatgpt.com/g/g-69b1766dd10081919c20af1571264c10-afs-assistenten",
    linkLabel: "Öppna AFS-assistenten",
  },
  {
    id: "bollplank-ai",
    name: "Bollplank AI-agent med fyra personligheter",
    category: "ide",
    shortDescription: "AI-baserat reflektionsverktyg med återkoppling från fyra personligheter.",
    description: "Ett AI-baserat reflektionsverktyg där användaren får återkoppling och perspektiv från fyra olika personligheter för att bredda sin egen tanke.",
    whenToUse: "När du behöver bolla en idé, ett beslut eller ett problem och vill få flera perspektiv snabbt.",
    howToUse: "Beskriv din situation eller fråga för agenten och låt de fyra personligheterna ge sin respektive återkoppling.\n",
    icon: "Bot",
    linkUrl: "https://chatgpt.com/g/g-6a23222e74888191b85205becfe28b5a-bollplank-kortleken",
    linkLabel: "Öppna Bollplanket-Kortleken",
  },
  {
    id: "intressentanalys",
    name: "Intressentanalys – Kommunikationsplan",
    category: "forstudie",
    shortDescription: "Kartlägg intressenter och hur de ska hanteras.",
    description: "Används när projektet behöver få en tydlig bild av vilka intressenter som berörs och hur dessa ska hanteras genom projektets olika skeden.",
    whenToUse: "Tidigt i projektet och uppdateras vid behov under projektets gång.",
    howToUse: "Lista intressenter, bedöm inflytande och intresse, och bestäm kommunikationsstrategi för varje grupp.",
    icon: "Users",
    templates: [
      { file: "templates/10_-_Intressentanalys_kommunikationsplan.xltx", label: "Ladda ner mall för intressentanalys" },
    ],
  },
  {
    id: "risk-workshop",
    name: "RISK workshop",
    category: "forstudie",
    shortDescription: "Identifiera, sortera och prioritera projektets risker tillsammans.",
    description: "Ett strukturerat arbetssätt för att snabbt identifiera, sortera och prioritera projektets risker – både projektrisker och risker i bygg- och bruksskede – tillsammans med rätt personer i rummet.",
    whenToUse: "I tidig planering och vid större förändringar i projektet.",
    howToUse: "Samla nyckelpersoner, brainstorma risker, värdera sannolikhet och konsekvens, och prioritera åtgärder.",
    icon: "AlertTriangle",
    templates: [
      { file: "templates/03_-_Bilaga_riskmall.xlsx", label: "Ladda ner mall för Riskworkshop" },
      { file: "templates/03_-_Riskworkshop.docx", label: "Ladda ner instruktioner för Riskworkshop" },
    ],
  },
  {
    id: "bowtie",
    name: "Visualisera risker med Bowtie-diagram",
    category: "forstudie",
    shortDescription: "Visualisera orsaker, händelse och konsekvenser av risker.",
    description: "Bowtie-diagrammet är ett visuellt verktyg som tydliggör orsaker till en oönskad händelse, händelsen i sig, och dess konsekvenser – samt vilka barriärer som finns.",
    whenToUse: "Vid djupare riskanalys av kritiska risker där barriärer behöver synliggöras.",
    howToUse: "Placera den oönskade händelsen i mitten, orsaker till vänster, konsekvenser till höger, och skriv in barriärer.",
    icon: "Workflow",
    templates: [
      { file: "xxx", label: "Ladda ner mall BowTie" },
      { file: "xxx", label: "Ladda ner instruktioner för användandet" },
    ],
  },
  {
    id: "projekttriangeln",
    name: "Projekttriangeln – Prioriteringslista",
    category: "forstudie",
    shortDescription: "Visualiserar sambandet mellan tid, kostnad och omfattning.",
    description: "Ett verktyg som visualiserar sambandet mellan Tid, Kostnad och Omfattning/Kvalitet. Grundprincipen är att dessa tre faktorer alltid är beroende av varandra – en förändring i en påverkar minst en av de andra.",
    whenToUse: "Vid prioriteringar, förändringar i scope eller när konflikter uppstår mellan tid, kostnad och kvalitet.",
    howToUse: "Diskutera och bestäm vilken av faktorerna som är viktigast i projektet och prioritera utifrån det.",
    icon: "Triangle",
        templates: [
      { file: "public/templates/12_-_Projekttriangeln.docx", label: "Ladda ner instruktioner för projekttriangeln" },
    ],
  },
  {
    id: "startsakring",
    name: "Startsäkring",
    category: "projektstart",
    shortDescription: "Säkerställ rätt förutsättningar innan projektet startar.",
    description: "Verktyget säkerställer att rätt förutsättningar finns på plats avseende mål, omfattning, roller, resurser, tidplan, risker och arbetssätt. Det minskar oklarheter, förebygger förseningar och skapar en gemensam bild av vad som ska göras och hur.",
    whenToUse: "Innan projektet startar eller vid övergång mellan faser.",
    howToUse: "Gå systematiskt igenom checklistan för mål, omfattning, roller, resurser, tidplan, risker och arbetssätt med projektteamet.\n",
    icon: "ShieldCheck",
    linkUrl: "https://lkabonline.sharepoint.com/:u:/r/sites/SSG-FEMMAN_test/Delade%20dokument/Allm%C3%A4nt/01_Verktygsl%C3%A5da/01_V%C3%A5ra%20verktyg/04%20-%20Starts%C3%A4kring%20l%C3%A4nk.url?csf=1&web=1&e=h9DfJg",
    linkLabel: "Öppna Startsäkring i teams",
  },
  {
    id: "mappstruktur",
    name: "Mappstruktur",
    category: "projektstart",
    shortDescription: "Skapa en tydlig och gemensam mappstruktur vid projektstart.",
    description: "Verktyget hjälper dig att skapa en tydlig och gemensam mappstruktur vid projektstart, så att alla lättare kan spara, hitta och följa upp projektdokument.",
    whenToUse: "Vid projektstart eller när befintlig struktur behöver städas upp.",
    howToUse: "Använd standardmallen för mappstruktur och anpassa efter projektets behov.",
    icon: "FolderTree",
    templates: [
      { file: "public/templates/13_-_Mappstruktur_for_projekt.zip", label: "Ladda ner Mappstrukturen" },
      { file: "public/templates/13_-_Mappstruktur_for_projekt.docx", label: "Ladda ner instruktioner för Mappstrukturen" },
    ],
  },
  {
    id: "imgd",
    name: "IMGD-metoden",
    category: "projektstart",
    shortDescription: "Förstå hur grupper utvecklas över tid enligt Susan Wheelan.",
    description: "Integrated Model of Group Development enligt Susan Wheelan. Beskriver hur grupper utvecklas över tid och används för att förstå team, samarbete och ledarskap. Hjälper dig att förstå var teamet befinner sig och vad som krävs för att komma vidare.",
    whenToUse: "När du leder team och vill förstå deras utvecklingsstadie och anpassa ledarskapet.",
    howToUse: "Bedöm vilken av de fyra faserna teamet befinner sig i och anpassa ditt ledarskap och insatser därefter.",
    icon: "Users2",
    templates: [
      { file: "public/templates/15_-_IMGD-Metoden.docx", label: "Ladda ner instruktioner för IMGD-Metoden" },
    ],
  },
  {
    id: "kommunikationsverktyg",
    name: "Kommunikationsverktyg",
    category: "projektstart",
    shortDescription: "Förbättra dina kommunikationsfärdigheter före, under och efter möten.",
    description: "Verktyg för att förbättra dina kommunikationsfärdigheter och skapa mer effektiva och meningsfulla samtal – vid möten, innan möten och efter möten.",
    whenToUse: "I alla situationer där tydlig och effektiv kommunikation är viktig.",
    howToUse: "Använd checklistor och samtalsmodeller för förberedelse, genomförande och uppföljning av möten.",
    icon: "MessagesSquare",
    templates: [
      { file: "public/templates/07_-_Forbattra_din_kommunikation_och_moten.docx", label: "Ladda ner instruktioner för Kommunikationsverktyget" },
    ],
    
  },
  {
    id: "wbs",
    name: "WBS – Work Breakdown Structure",
    category: "planering",
    shortDescription: "Bryt ner projektet i mindre hanterbara delar.",
    description: "Ett verktyg för att bryta ner ett projekt i mindre hanterbara delar. Hjälper projektledaren att få en tydlig överblick över vad som måste göras genom att dela upp arbetet i mindre delar.",
    whenToUse: "I planeringens tidiga skede för att definiera projektets omfattning.",
    howToUse: "Utgå från slutleveransen och bryt ner i nivåer tills varje del kan tilldelas och uppskattas.",
    icon: "GitBranch",
    templates: [
      { file: "public/templates/05_-_WBS.docx", label: "Ladda ner instruktioner för WBS skapande" },
    ],    
  },
  {
    id: "natplan",
    name: "NÄT-plan",
    category: "planering",
    shortDescription: "Planeringsverktyg som identifierar den kritiska linjen.",
    description: "Ett planeringsverktyg som används i samband med att en WBS har utförts. Kan även användas för att identifiera projektets kritiska linje.",
    whenToUse: "Efter att WBS är klar och du behöver planera tid och beroenden mellan aktiviteter.",
    howToUse: "Koppla samman aktiviteter i ett nätdiagram, beräkna tidsåtgång och identifiera kritiska linjen.",
    icon: "Network",
    templates: [
      { file: "public/templates/06_-_Natplan.docx", label: "Ladda ner instruktioner för Nät-plan" },
    ],
  },
  {
    id: "aktivitetslista-planner",
    name: "Aktivitetslista – Planner",
    category: "planering",
    shortDescription: "Standardiserad aktivitetslista som genererar gantt-schema.",
    description: "Verktyget skapar struktur, tydlighet och framdrift i projekt genom en standardiserad aktivitetslista i Planner som automatiskt skapar en tidsplan/gantt-schema.",
    whenToUse: "När du behöver översikt över aktiviteter, ansvar och tidplan.",
    howToUse: "Lägg in aktiviteter i Planner-mallen med ansvariga och datum – schemat skapas automatiskt.\n",
    icon: "ListChecks",
    linkUrl: "https://planner.cloud.microsoft/webui/v1/premiumplan/9e69881e-0f7a-4a0e-8f3d-0f69d4046e00/org/1fab89ff-ec1f-4d77-8b56-49c61b48109d?tid=872908aa-7a73-42e6-a05c-62113a7d8af3",
    linkLabel: "👉 Öppna Aktivitetslistan i planner",
    templates: [
      { file: "public/templates/16_-_Aktivitetslista_Planner.docx", label: "Ladda ner instruktioner för aktivitetslistan" },
    ],
  },
  {
    id: "protokollmall",
    name: "Protokollmall",
    category: "planering",
    shortDescription: "En mall från LKAB för mötesprotokoll.",
    description: "En färdig protokollmall från LKAB som ger en enhetlig struktur för dokumentation av möten, beslut och åtgärdspunkter.",
    whenToUse: "Vid alla projektmöten där beslut och åtgärder ska dokumenteras.",
    howToUse: "Använd mallen, fyll i deltagare, agenda, beslut, åtgärder med ansvarig och datum, och distribuera till deltagarna.",
    icon: "FileText",
    templates: [
      { file: "public/templates/09_-_Protokollmall.docx", label: "Ladda ner protokollmallen" },
    ],    
  },
  {
    id: "snabbcoaching",
    name: "Snabbcoaching",
    category: "genomforande",
    shortDescription: "Coacha en person genom ett problem på 15 minuter.",
    description: "Verktyget hjälper dig att enkelt coacha en person genom ett problem de har på enbart 15 minuter. Syftet är att hjälpa individen att komma fram till en lösning och tillvägagångssätt för att kunna ta sig vidare med problemet när de har kört fast.",
    whenToUse: "När en kollega eller medarbetare har kört fast och behöver hjälp att komma vidare.",
    howToUse: "Avsätt 15 minuter, följ coachingstrukturen med öppna frågor och låt personen själv formulera nästa steg.",
    icon: "Timer",
    templates: [
      { file: "public/templates/20_-_Snabbcoaching.docx", label: "Ladda ner instruktioner för snabbcoaching" },
    ],      
  },
  {
    id: "konflikthantering",
    name: "Konflikthanteringsstilar",
    category: "genomforande",
    shortDescription: "Fem huvudsakliga stilar för att hantera konflikter.",
    description: "En översikt över de fem huvudsakliga stilarna vid behandling av konflikter och när respektive stil är lämplig att använda.",
    whenToUse: "När konflikter uppstår och du behöver välja angreppssätt.",
    howToUse: "Identifiera vilken stil som passar situationen – undvikande, anpassande, kompromissande, samarbetande eller konkurrerande.",
    icon: "Swords",
    templates: [
      { file: "public/templates/18_-_Konflikthanteringsstilar.docx", label: "Ladda ner instruktioner för konflikthantering" },
    ],
  },
  {
    id: "svara-samtal",
    name: "Strukturer för svåra samtal",
    category: "genomforande",
    shortDescription: "Tre samtalsstrukturer för svåra samtal.",
    description: "Ett praktiskt stöd för att genomföra svåra samtal på ett tydligt och strukturerat sätt. Innehåller tre samtalsstrukturer: involverande samtal, gränsdragande samtal och tillrättavisande samtal.",
    whenToUse: "Inför svåra samtal med medarbetare, kollegor eller intressenter.",
    howToUse: "Välj samtalsstruktur utifrån situation, förbered samtalet och följ strukturen under genomförandet.",
    icon: "MessageSquareWarning",
    templates: [
      { file: "public/templates/19_-_Strukturer_for_svara_samtal.docx", label: "Ladda ner instruktioner för svåra samtal" },
    ],
  },
  {
    id: "saga-nej",
    name: "Konsten att säga NEJ",
    category: "genomforande",
    shortDescription: "Strukturerat tillvägagångssätt för att enklare kunna säga nej.",
    description: "Att säga nej är något många tycker är svårt och obekvämt. Verktyget hjälper användaren att ha ett strukturerat tillvägagångssätt för att enklare kunna säga nej i sådana situationer.",
    whenToUse: "När du behöver prioritera, sätta gränser eller tacka nej till uppgifter och förfrågningar.",
    howToUse: "Följ stegen i verktyget: lyssna, bekräfta, motivera och föreslå alternativ vid behov.",
    icon: "Ban",
    templates: [
      { file: "public/templates/17_-_Konsten_att_saga_NEJ.docx", label: "Ladda ner instruktioner för att säga NEJ!" },
    ],
  },
  {
    id: "reflektionsverktyg",
    name: "Reflektionsverktyg",
    category: "avslut",
    shortDescription: "Strukturerad reflektion för lärande och utveckling.",
    description: "Ett verktyg som hjälper individer och team att reflektera över erfarenheter, lärdomar och nästa steg på ett strukturerat sätt.",
    whenToUse: "Efter avslutade aktiviteter, faser eller projekt – eller löpande för kontinuerlig utveckling.",
    howToUse: "Avsätt tid, använd reflektionsfrågor och dokumentera lärdomar och åtgärder.",
    icon: "Lightbulb",
    templates: [
      { file: "xxxx", label: "Ladda ner instruktioner för reflektionsverktyget" },
    ],
  },
];
