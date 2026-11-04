from pathlib import Path
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_TAB_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
ROOT = Path(__file__).resolve().parent
doc = Document()
s = doc.sections[0]
s.page_width, s.page_height = Inches(8.5), Inches(11)
s.top_margin = s.bottom_margin = Inches(.5)
s.left_margin = s.right_margin = Inches(.6)
for name in ['Normal', 'Title', 'Heading 1']:
 st = doc.styles[name]
 st.font.name = 'Times New Roman'
 st.font.size = Pt(10.5)
 st.font.color.rgb = RGBColor(0,0,0)
 st.paragraph_format.space_before = st.paragraph_format.space_after = Pt(0)
 st.paragraph_format.line_spacing = 1.0
 for el in st.element.iter():
  for ch in list(el):
   if ch.tag.endswith('}pBdr'): el.remove(ch)
def center(text, size=10.5, bold=False, style=None):
 p=doc.add_paragraph(style=style); p.alignment=WD_ALIGN_PARAGRAPH.CENTER
 r=p.add_run(text); r.font.name='Times New Roman'; r.font.size=Pt(size); r.bold=bold
 return p
def heading(text):
 p=doc.add_paragraph(); p.paragraph_format.space_before=Pt(8); p.paragraph_format.space_after=Pt(3)
 p.paragraph_format.keep_with_next=True; p.add_run(text).bold=True
 border=OxmlElement('w:pBdr'); bottom=OxmlElement('w:bottom')
 for k,v in {'val':'single','sz':'4','space':'1','color':'777777'}.items(): bottom.set(qn('w:'+k),v)
 border.append(bottom); p._p.get_or_add_pPr().append(border)
def row(text, date='', bold=False, before=0):
 p=doc.add_paragraph(); f=p.paragraph_format; f.space_before=Pt(before); f.keep_with_next=True
 f.tab_stops.add_tab_stop(Inches(7.3),WD_TAB_ALIGNMENT.RIGHT)
 p.add_run(text).bold=bold
 if date: p.add_run('\t'+date)
 return p
def bullet(text):
 p=doc.add_paragraph(); f=p.paragraph_format; f.left_indent=Inches(.17); f.first_line_indent=Inches(-.17)
 f.tab_stops.add_tab_stop(Inches(.17)); f.space_after=Pt(2); f.keep_together=True
 p.add_run('•\t'+text)
center('Zhaolin Hu',20,True,'Title')
center('Interaction Designer / Creative Technologist',10.5)
center('Savannah, GA | zhaohu21@student.scad.edu')
center('Portfolio: kdheui.github.io/Zhao-Portfolio/ | LinkedIn: linkedin.com/in/zhaolin-hu-9b152038a',9.5)
heading('EDUCATION')
row('Savannah College of Art and Design','Savannah, GA',True)
row('MFA, Interactive Design','Sep 2025 - Nov 2027 (expected)')
row('Hubei University of Technology','',True,before=4)
row('BA, Product Design','Sep 2021 - Jun 2025')
heading('PROFESSIONAL EXPERIENCE')
row('SCADpro × Deloitte Digital - Sponsored Course','Savannah, GA',True)
row('User Experience Researcher','Jun - Aug 2026')
bullet('Developed interview questions, moderator scripts, recorder forms, and fieldwork plans for a team study of government services involving 33 interview participants and 236 survey responses.')
bullet('Added positive-experience questions and optional probes; participated in field interviews, cleaned records, and contributed to affinity analysis and research findings.')
bullet('Helped translate findings into proposed AI assistance requirements: service continuity, clear status feedback, and accountable handoff to human support.')
heading('SELECTED PROJECTS')
row('HOVR - Gesture-Controlled Kitchen Tablet','Q2 2026',True)
row('UX/UI Designer & Interaction Prototyper | Individual | Figma, Unity, MediaPipe, Xcode')
bullet('Designed Kitchen and Entertainment modes, mapping hand gestures to selection, scrolling, and simulated interruption handling.')
bullet('Built real-time hand tracking in Unity with MediaPipe; deployed to iPad through Xcode and tested interactions on-device.')
row('Smart Research - Academic Search Experience','Winter 2026',True,before=4)
row('UX/UI & Interaction Designer | Individual | Figma')
bullet('Designed Search, Library, and Map workflows with contextual paper review, personal tags, and reusable components for loading, confirmation, and fallback states.')
bullet('Evaluated the Figma prototype with two users; identified opportunities to clarify related-content entry points and the research map. AI retrieval remained a simulated interaction.')
row('Robinhood Junior - Investing Education Concept','Winter 2026',True,before=4)
row('Team Member | Academic UX Design Project')
bullet('Collaborated on an investing education concept combining virtual-money scenarios, short lessons, and contextual definitions; the team evaluated the prototype with four users.')
row('Epic Door & Fixed Scream - Real-Time Interactive Experiences','Fall 2025',True,before=4)
row('Creator | Unreal Engine')
bullet('Built a third-person portal environment and a fixed-screen arcade platformer, exploring spatial interaction, level layout, and gameplay feedback; documented both through running-project demos.')
heading('EXTRACURRICULAR & LEADERSHIP')
row('SCAD Hack IX - Hackathon Participant','Oct 1, 2026',True)
bullet('Conducted early research and designed the end-to-end gamification flow for a team concept supporting neurodivergent college freshmen through progressive campus scenarios and feedback.')
row('Hubei University of Technology - Product Design Program','',True,before=4)
bullet('Spoke at the Outstanding Graduate Sharing Session, sharing personal experience with fellow students.')
heading('SKILLS')
for label,text in [('Design & Research','UX research, interview design, affinity analysis, interaction design, usability testing, design systems, gamification'),('Tools','Figma, Unity, Unreal Engine, MediaPipe, Xcode, Rhino 3D'),('Development','JavaScript, creative coding, AI-assisted development')]:
 p=doc.add_paragraph(); p.paragraph_format.space_after=Pt(2); p.add_run(label+': ').bold=True; p.add_run(text)
doc.core_properties.title='Zhaolin Hu Resume'; doc.core_properties.author='Zhaolin Hu'
doc.save(ROOT/'Zhaolin-Hu-Resume.docx')
(ROOT/'Zhaolin-Hu-Resume-Current.txt').write_text('\n'.join(p.text for p in doc.paragraphs))
