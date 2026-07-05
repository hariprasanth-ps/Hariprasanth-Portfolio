"""
Generates public/Hariprasanth.pdf from the real resume content (sourced from the
user's LaTeX/RenderCV resume). Run this from inside the `public/` folder:

    cd public && python3 ../scripts/generate_resume.py

Re-run any time lib/data.js changes and you want the PDF to match.
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, ListFlowable, ListItem

TEAL = colors.HexColor('#12897F')
INK = colors.HexColor('#101B22')
MUTED = colors.HexColor('#5C6E77')
AMBER = colors.HexColor('#B9790C')
LINE = colors.HexColor('#DCE5E6')

doc = SimpleDocTemplate(
    "Hariprasanth.pdf",
    pagesize=letter,
    topMargin=0.45 * inch,
    bottomMargin=0.4 * inch,
    leftMargin=0.75 * inch,
    rightMargin=0.75 * inch,
    title="Hariprasanth P S - Resume",
)

styles = getSampleStyleSheet()
name_style = ParagraphStyle('Name', parent=styles['Title'], fontName='Helvetica-Bold', fontSize=20, textColor=INK, spaceAfter=2, alignment=0, leading=24)
contact_style = ParagraphStyle('Contact', parent=styles['Normal'], fontName='Helvetica', fontSize=9.5, textColor=MUTED, spaceAfter=12)
section_style = ParagraphStyle('Section', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=10.5, textColor=INK, spaceBefore=8, spaceAfter=3)
body_style = ParagraphStyle('Body', parent=styles['Normal'], fontName='Helvetica', fontSize=9, textColor=INK, leading=12, spaceAfter=3)
role_line_style = ParagraphStyle('RoleLine', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=10.5, textColor=INK)
meta_line_style = ParagraphStyle('MetaLine', parent=styles['Normal'], fontName='Helvetica-Oblique', fontSize=8.5, textColor=MUTED, spaceAfter=2)
bullet_style = ParagraphStyle('Bullet', parent=styles['Normal'], fontName='Helvetica', fontSize=8.8, textColor=INK, leading=11.3)

story = []

# --- Header -----------------------------------------------------------
story.append(Paragraph("HARIPRASANTH P S", name_style))
story.append(Paragraph(
    "Chennai, India &nbsp;|&nbsp; penuhariprasanth@gmail.com &nbsp;|&nbsp; +91 8248754472 &nbsp;|&nbsp; "
    "linkedin.com/in/hariprasanth-ps",
    contact_style
))
story.append(HRFlowable(width="100%", thickness=1, color=LINE))

# --- Professional Summary ----------------------------------------------
story.append(Paragraph("PROFESSIONAL SUMMARY", section_style))
story.append(Paragraph(
    "Full-Stack Software Engineer with 4+ years of experience architecting, developing, and optimizing "
    "scalable enterprise applications. Experienced across frontend technologies (HTML5, CSS3, JavaScript) "
    "and backend systems (ColdFusion, REST APIs, SQL). Track record of delivering solutions that reduce "
    "processing delays, improve system efficiency, and enhance user experience — with a focus on performance "
    "optimization, database design, and Agile collaboration.",
    body_style
))

# --- Technical Skills ----------------------------------------------------
story.append(Paragraph("TECHNICAL SKILLS", section_style))
skills_rows = [
    ("Languages", "JavaScript (ES6+), Python, SQL, PL/SQL, CFML"),
    ("Frontend", "HTML5, CSS3, JavaScript, AJAX, JSON, Responsive Web Design"),
    ("Backend", "ColdFusion (2016, 2021, 2023), RESTful APIs, Microservices Architecture"),
    ("Databases", "Oracle Database, Microsoft SQL Server, MySQL, Query Optimization"),
    ("Data & Analytics", "Apache Spark, Kafka, ETL Processes, Data Validation"),
    ("DevOps & Tools", "Git, GitHub, Azure DevOps, CI/CD Pipelines, VS Code, Postman"),
]
for label, value in skills_rows:
    story.append(Paragraph(f"<b>{label}:</b> {value}", body_style))

# --- Professional Experience ---------------------------------------------
story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_style))
story.append(Paragraph("Software Engineer — Prodapt Solutions, Chennai, India", role_line_style))
story.append(Paragraph("June 2022 – Present", meta_line_style))
story.append(ListFlowable([
    ListItem(Paragraph(
        "<b>Rapid Response Application (Windstream):</b> Architected and developed full-stack web "
        "applications using CFML, JavaScript, HTML5, and CSS3, processing high-volume transaction "
        "requests with 99.2% uptime.", bullet_style)),
    ListItem(Paragraph(
        "Cut average response time by 40% by identifying database bottlenecks and rewriting SQL "
        "queries, improving experience for 50,000+ active users.", bullet_style)),
    ListItem(Paragraph(
        "Designed RESTful APIs enabling 15+ third-party applications to integrate with zero downtime.",
        bullet_style)),
    ListItem(Paragraph(
        "Collaborated cross-functionally with product, QA, and DevOps teams in Agile sprints, "
        "consistently hitting sprint velocity targets.", bullet_style)),
    ListItem(Paragraph(
        "Mentored 3 junior developers on full-stack best practices and code review standards.",
        bullet_style)),
    ListItem(Paragraph(
        "<b>Bad Debt Application (Windstream):</b> Designed the SQL Server database architecture for "
        "customer data management and outstanding balance tracking.", bullet_style)),
    ListItem(Paragraph(
        "Automated ETL pipelines in SQL Server, cutting manual data-import effort by 85% across "
        "$2M+ in receivables and eliminating entry errors.", bullet_style)),
    ListItem(Paragraph(
        "Built SQL-based analytical dashboards for collections reporting, improving collections "
        "efficiency by 30%.", bullet_style)),
    ListItem(Paragraph(
        "Provided technical support and documentation across 5 regional offices, cutting support "
        "tickets by 20%.", bullet_style)),
], bulletType='bullet', start='circle', leftIndent=12, spaceBefore=1, spaceAfter=5))

# --- Key Accomplishments --------------------------------------------------
story.append(Paragraph("KEY ACCOMPLISHMENTS", section_style))
story.append(ListFlowable([
    ListItem(Paragraph(
        "<b>Automated Data Validation Framework:</b> Cut manual effort 75%, processing errors 95%, "
        "and tripled operational throughput.", bullet_style)),
    ListItem(Paragraph(
        "<b>Azure DevOps KPI Reporting:</b> Built ticket-extraction and KPI automation; recognized "
        "with Star Award of the Month.", bullet_style)),
    ListItem(Paragraph(
        "<b>Performance Excellence:</b> Delivered optimized, production-quality code across 20+ "
        "deployments.", bullet_style)),
], bulletType='bullet', start='circle', leftIndent=12, spaceBefore=1, spaceAfter=4))

# --- Education -------------------------------------------------------------
story.append(Paragraph("EDUCATION", section_style))
story.append(Paragraph("Bachelor of Engineering in Computer Science and Engineering", role_line_style))
story.append(Paragraph("St. Joseph's College of Engineering, Chennai &nbsp;·&nbsp; June 2018 – June 2022", meta_line_style))
story.append(Paragraph("CGPA: 8.2 / 10", body_style))

# --- Certifications ----------------------------------------------------------
story.append(Paragraph("CERTIFICATIONS &amp; CONTINUOUS LEARNING", section_style))
story.append(ListFlowable([
    ListItem(Paragraph("JavaScript - The Complete Guide 2024 (Beginner + Advanced) — Udemy", bullet_style)),
    ListItem(Paragraph("Academy Accreditation - Databricks Fundamentals — Databricks Academy", bullet_style)),
    ListItem(Paragraph("Academy Accreditation - AI Agent Fundamentals — Databricks Academy", bullet_style)),
], bulletType='bullet', start='circle', leftIndent=12, spaceBefore=1, spaceAfter=2))

doc.build(story)
print("done")
