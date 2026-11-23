/* =====================================================================
   고급 대수 Ⅰ~Ⅲ단원 종합 평가 — 2026학년도 2학기 고급 대수 · 온라인 공동교육과정
   문항 · 개념 · 힌트 (정답은 이 파일에 없습니다. 정답은 Supabase의 oc_keys 표에만 있고
   교사 화면에서 비밀번호로 로그인해야 보입니다.)
   ===================================================================== */
window.EXAM = {
 "title": "고급 대수 Ⅰ~Ⅲ단원 종합 평가",
 "course": "2026학년도 2학기 고급 대수 · 온라인 공동교육과정",
 "short": "종합 평가 · 온라인 공동교육과정",
 "tag": "1세트 · 온라인 공동",
 "fileTag": "고급대수_온라인공동_종합평가",
 "units": [
  {
   "no": 1,
   "name": "Ⅰ. 벡터공간",
   "range": "pp.10–57"
  },
  {
   "no": 2,
   "name": "Ⅱ. 행렬과 선형변환",
   "range": "pp.58–105"
  },
  {
   "no": 3,
   "name": "Ⅲ. 행렬의 대각화",
   "range": "pp.106–134"
  }
 ],
 "questions": [
  {
   "no": 1,
   "unit": 1,
   "local": 1,
   "level": "하",
   "topic": "벡터의 상등",
   "ref": "p.12 문제 1 유형",
   "text": "두 벡터 \\(\\vec u=(6,\\ a+b,\\ 1,\\ 3)\\), \\(\\vec w=(3c,\\ 5,\\ a-b+c,\\ 3)\\)에 대하여 \\(\\vec u=\\vec w\\)일 때, 실수 \\(a,\\ b,\\ c\\)의 값을 각각 구하시오.",
   "concept": "두 \\(n\\)차원 벡터가 <b>같다</b>는 것은 <b>대응하는 성분이 모두 같다</b>는 뜻입니다.\n$$\\vec u=\\vec w\\iff u_i=w_i\\quad(i=1,\\,2,\\,\\dots,\\,n)$$",
   "hints": [
    "성분끼리 등식을 세웁니다: \\(6=3c,\\quad a+b=5,\\quad 1=a-b+c\\)",
    "첫째 식에서 \\(c=2\\). 셋째 식에 넣으면 \\(a-b=-1\\). 이제 \\(a+b=5\\)와 연립하세요."
   ],
   "answerGuide": "예: a = ?, b = ?, c = ?"
  },
  {
   "no": 2,
   "unit": 1,
   "local": 2,
   "level": "하",
   "topic": "벡터의 연산",
   "ref": "p.18 문제 3 유형",
   "text": "두 벡터 \\(\\vec u=(2,\\ -1,\\ 0,\\ 3)\\), \\(\\vec v=(1,\\ 2,\\ -2,\\ 1)\\)에 대하여 $$2\\vec u+3\\vec x=5\\vec u-3\\vec v$$ 를 만족시키는 벡터 \\(\\vec x\\)를 구하시오.",
   "concept": "벡터의 덧셈과 실수배는 <b>성분별로</b> 계산하며, 일차방정식처럼 이항하여 \\(\\vec x\\)를 구할 수 있습니다.\n$$c\\vec u=(cu_1,\\dots,cu_n),\\qquad \\vec u+\\vec w=(u_1+w_1,\\dots,u_n+w_n)$$",
   "hints": [
    "\\(\\vec x\\)가 있는 항만 남기면 \\(3\\vec x=5\\vec u-2\\vec u-3\\vec v=3\\vec u-3\\vec v\\)",
    "양변을 3으로 나누면 \\(\\vec x=\\vec u-\\vec v\\). 성분별로 빼세요."
   ],
   "answerGuide": "예: x = (?, ?, ?, ?)"
  },
  {
   "no": 3,
   "unit": 1,
   "local": 3,
   "level": "하",
   "topic": "벡터의 크기와 거리",
   "ref": "p.14 문제 4 유형",
   "text": "두 벡터 \\(\\vec u=(1,\\ a,\\ 2,\\ 0)\\), \\(\\vec w=(3,\\ 1,\\ 2,\\ a)\\)에 대하여 \\(|\\vec u-\\vec w|=\\sqrt{17}\\)일 때, 양수 \\(a\\)의 값을 구하시오.",
   "concept": "\\(\\vec w=(w_1,\\dots,w_n)\\)의 크기는 \\(|\\vec w|=\\sqrt{w_1^2+\\cdots+w_n^2}\\)이고, 두 벡터 사이의 거리는 \\(|\\vec u-\\vec w|\\)입니다.\n<br>제곱근이 불편하면 양변을 제곱해서 \\(|\\vec u-\\vec w|^2\\)으로 계산하세요.",
   "hints": [
    "\\(\\vec u-\\vec w=(-2,\\ a-1,\\ 0,\\ -a)\\)",
    "\\(4+(a-1)^2+a^2=17\\)을 정리하면 \\(a^2-a-6=0\\)"
   ],
   "answerGuide": "예: a = ?"
  },
  {
   "no": 4,
   "unit": 1,
   "local": 4,
   "level": "하",
   "topic": "단위벡터",
   "ref": "p.15 문제 5 유형",
   "text": "벡터 \\(\\vec w=(2,\\ -1,\\ 2,\\ 4)\\)와 <b>방향이 같은</b> 단위벡터를 구하시오.",
   "concept": "크기가 1인 벡터를 <b>단위벡터</b>라 합니다. \\(\\vec w\\ne\\vec0\\)와 평행한 단위벡터는\n$$\\pm\\frac{\\vec w}{|\\vec w|}$$ 이고, 방향이 같으면 \\(+\\), 반대이면 \\(-\\)입니다.",
   "hints": [
    "\\(|\\vec w|=\\sqrt{4+1+4+16}=\\ ?\\)",
    "\\(|\\vec w|=5\\)이므로 구하는 벡터는 \\(\\frac15\\vec w\\)입니다."
   ],
   "answerGuide": "예: (?, ?, ?, ?)"
  },
  {
   "no": 5,
   "unit": 1,
   "local": 5,
   "level": "하",
   "topic": "벡터의 일차결합",
   "ref": "p.23 중단원 02 유형",
   "text": "세 벡터 \\(\\vec u=(2,\\ 1)\\), \\(\\vec v=(1,\\ -1)\\), \\(\\vec w=(4,\\ 5)\\)에 대하여 \\(x\\vec u+y\\vec v=\\vec w\\)인 실수 \\(x,\\ y\\)의 합 \\(x+y\\)의 값을 구하시오.",
   "concept": "\\(x\\vec u+y\\vec v=\\vec w\\)는 <b>성분별 연립방정식</b>과 같습니다.\n$$x(u_1,u_2)+y(v_1,v_2)=(w_1,w_2)\\iff\\begin{cases}u_1x+v_1y=w_1\\\\u_2x+v_2y=w_2\\end{cases}$$",
   "hints": [
    "\\(2x+y=4,\\quad x-y=5\\)",
    "두 식을 더하면 \\(3x=9\\). \\(x\\)를 구해 \\(y\\)도 구하세요."
   ],
   "answerGuide": "예: x + y = ?"
  },
  {
   "no": 6,
   "unit": 1,
   "local": 6,
   "level": "하",
   "topic": "내적과 수직 조건",
   "ref": "pp.37–41 벡터의 내적 유형",
   "text": "두 벡터 \\(\\vec u=(1,\\ k,\\ 3,\\ 2)\\), \\(\\vec v=(k,\\ 2,\\ -1,\\ -3)\\)이 서로 수직일 때, 실수 \\(k\\)의 값을 구하시오.",
   "concept": "두 벡터 \\(\\vec u=(u_1,\\dots,u_n)\\), \\(\\vec v=(v_1,\\dots,v_n)\\)의 <b>내적</b>은 \\(\\vec u\\cdot\\vec v=u_1v_1+\\cdots+u_nv_n\\)입니다.\n<br>영벡터가 아닌 두 벡터가 <b>수직</b> \\(\\iff\\) \\(\\vec u\\cdot\\vec v=0\\)",
   "hints": [
    "\\(\\vec u\\cdot\\vec v=1\\cdot k+k\\cdot2+3\\cdot(-1)+2\\cdot(-3)\\)",
    "\\(3k-9=0\\)"
   ],
   "answerGuide": "예: k = ?"
  },
  {
   "no": 7,
   "unit": 1,
   "local": 7,
   "level": "중",
   "topic": "부분공간 판정",
   "ref": "p.21 문제 3 유형",
   "text": "다음 부분집합 \\(W\\)가 \\(\\mathbb R^3\\)의 부분공간인지 조사하고, 그 이유를 쓰시오.\n<ol class=\"sub\"><li>\\(W=\\{(x,\\ y,\\ x+y)\\mid x,y\\in\\mathbb R\\}\\)</li><li>\\(W=\\{(x,y,z)\\mid x+y+z=1\\}\\)</li><li>\\(W=\\{(x,y,z)\\mid xy=0\\}\\)</li></ol>",
   "concept": "\\(W\\ (\\ne\\varnothing)\\)가 벡터공간 \\(V\\)의 <b>부분공간</b>일 조건:\n<ul><li>\\(\\vec u,\\vec v\\in W\\Rightarrow \\vec u+\\vec v\\in W\\) (덧셈에 닫힘)</li><li>\\(c\\in\\mathbb R,\\ \\vec u\\in W\\Rightarrow c\\vec u\\in W\\) (실수배에 닫힘)</li></ul>\n부분공간은 반드시 <b>영벡터</b>를 포함합니다. 아니라고 할 때는 <b>반례 하나</b>면 충분합니다.",
   "hints": [
    "먼저 \\(\\vec0=(0,0,0)\\)이 \\(W\\)에 들어 있는지 확인하세요. (2)는 여기서 바로 판정됩니다. (1)은 \\(x(1,0,1)+y(0,1,1)\\)로 쓸 수 있어요.",
    "(3) \\((1,0,0)\\)과 \\((0,1,0)\\)은 모두 \\(W\\)에 속합니다. 두 벡터의 합은?"
   ],
   "answerGuide": "예: (1) ○○이다, 이유 … (2) … (3) …"
  },
  {
   "no": 8,
   "unit": 1,
   "local": 8,
   "level": "중",
   "topic": "일차종속이 되는 조건",
   "ref": "p.35 중단원 02 유형",
   "text": "\\(\\mathbb R^3\\)의 세 벡터 \\((1,\\ 0,\\ x),\\ (0,\\ x,\\ -2),\\ (1,\\ 1,\\ 1)\\)이 일차종속이 되도록 하는 실수 \\(x\\)의 값을 모두 구하시오.",
   "concept": "\\(\\mathbb R^3\\)의 세 벡터를 열(또는 행)로 하는 행렬의 행렬식이\n<ul><li>\\(0\\)이 아니면 → <b>일차독립</b></li><li>\\(0\\)이면 → <b>일차종속</b> (한 벡터를 나머지의 일차결합으로 나타낼 수 있음)</li></ul>",
   "hints": [
    "세 벡터를 행으로 하는 행렬식 \\(\\begin{vmatrix}1&0&x\\\\0&x&-2\\\\1&1&1\\end{vmatrix}=0\\)을 풀면 됩니다.",
    "1행으로 전개: \\(1\\cdot(x+2)-0+x\\cdot(0-x)=-x^2+x+2\\)"
   ],
   "answerGuide": "예: x = ?, ? (값을 모두)"
  },
  {
   "no": 9,
   "unit": 1,
   "local": 9,
   "level": "중",
   "topic": "내적과 사잇각",
   "ref": "p.40 문제 5 유형",
   "text": "두 벡터 \\(\\vec u,\\ \\vec v\\)에 대하여 $$|\\vec u|=3,\\qquad |\\vec v|=2,\\qquad (\\vec u-\\vec v)\\cdot(\\vec u+2\\vec v)=4$$ 일 때, \\(\\vec u\\)와 \\(\\vec v\\)가 이루는 각의 크기 \\(\\theta\\ (0\\le\\theta\\le\\pi)\\)를 구하시오.",
   "concept": "내적의 성질: \\(\\vec u\\cdot\\vec u=|\\vec u|^2\\), 분배법칙 성립. 두 벡터가 이루는 각 \\(\\theta\\)는\n$$\\cos\\theta=\\frac{\\vec u\\cdot\\vec v}{|\\vec u||\\vec v|}\\qquad(0\\le\\theta\\le\\pi)$$",
   "hints": [
    "전개하면 \\((\\vec u-\\vec v)\\cdot(\\vec u+2\\vec v)=|\\vec u|^2+\\vec u\\cdot\\vec v-2|\\vec v|^2\\)",
    "\\(9+\\vec u\\cdot\\vec v-8=4\\)에서 \\(\\vec u\\cdot\\vec v=3\\). \\(\\cos\\theta=\\dfrac{3}{3\\cdot2}\\)"
   ],
   "answerGuide": "예: θ = ? (라디안, π 사용)"
  },
  {
   "no": 10,
   "unit": 1,
   "local": 10,
   "level": "상",
   "topic": "정사영과 거리",
   "ref": "p.45 문제 2, 3 · p.53 중단원 02 유형",
   "text": "두 벡터 \\(\\vec u=(1,\\ 1,\\ 1,\\ 1)\\), \\(\\vec v=(3,\\ 1,\\ 2,\\ 6)\\)에 대하여 다음을 구하시오.\n<ol class=\"sub\"><li>\\(\\mathrm{proj}_{\\vec u}\\vec v\\)</li><li>\\(\\vec v\\)의 \\(\\vec u\\)에 수직인 성분</li><li>점 \\(A(3,1,2,6)\\)과 원점 \\(O\\), 점 \\(B(1,1,1,1)\\)을 지나는 직선 \\(OB\\) 사이의 거리</li></ol>",
   "concept": "\\(\\vec v\\)의 \\(\\vec u\\) 위로의 정사영(평행 성분)은\n$$\\mathrm{proj}_{\\vec u}\\vec v=\\frac{\\vec v\\cdot\\vec u}{|\\vec u|^2}\\,\\vec u$$ 이고, 수직 성분은 \\(\\vec v-\\mathrm{proj}_{\\vec u}\\vec v\\)입니다. 점과 직선 사이의 거리는 <b>수직 성분의 크기</b>입니다.\n<br>검산: 수직 성분과 \\(\\vec u\\)의 내적이 \\(0\\)이어야 합니다.",
   "hints": [
    "\\(\\vec v\\cdot\\vec u=3+1+2+6=12\\), \\(|\\vec u|^2=4\\)이므로 \\(\\mathrm{proj}_{\\vec u}\\vec v=3\\vec u\\)",
    "수직 성분 \\(\\vec v-3\\vec u=(0,-2,-1,3)\\). \\(\\vec u\\)와의 내적이 \\(0\\)인지 검산하고, 크기를 구하세요."
   ],
   "answerGuide": "예: (1) (…) (2) (…) (3) …"
  },
  {
   "no": 11,
   "unit": 2,
   "local": 1,
   "level": "하",
   "topic": "가우스 소거법",
   "ref": "p.63 문제 1 유형",
   "text": "가우스 소거법을 이용하여 다음 연립일차방정식을 푸시오. $$\\begin{cases}x+2y+z=8\\\\ 2x-y+z=3\\\\ x+y-z=0\\end{cases}$$",
   "concept": "첨가행렬에 <b>기본행연산</b>(① 두 행 교환 ② 한 행에 0이 아닌 수 곱하기 ③ 한 행의 상수배를 다른 행에 더하기)을 해도 해는 바뀌지 않습니다.\n<br>왼쪽이 단위행렬이 되면 오른쪽 열이 바로 해입니다. 구한 해는 처음 세 식에 넣어 검산하세요.",
   "hints": [
    "첨가행렬 \\(\\left(\\begin{array}{ccc|c}1&2&1&8\\\\2&-1&1&3\\\\1&1&-1&0\\end{array}\\right)\\)에서 1열의 아래 두 성분을 먼저 0으로 만드세요.",
    "\\((2)\\to(2)-2(1)\\), \\((3)\\to(3)-(1)\\)을 하면 \\(\\left(\\begin{array}{ccc|c}1&2&1&8\\\\0&-5&-1&-13\\\\0&-1&-2&-8\\end{array}\\right)\\)"
   ],
   "answerGuide": "예: x = ?, y = ?, z = ?"
  },
  {
   "no": 12,
   "unit": 2,
   "local": 2,
   "level": "하",
   "topic": "2×2 역행렬과 행렬방정식",
   "ref": "p.70 문제 1 유형",
   "text": "행렬 \\(A=\\begin{pmatrix}5&3\\\\3&2\\end{pmatrix}\\)에 대하여 다음을 구하시오.\n<ol class=\"sub\"><li>\\(A^{-1}\\)</li><li>\\(AX=\\begin{pmatrix}1\\\\1\\end{pmatrix}\\)을 만족시키는 행렬 \\(X\\)</li></ol>",
   "concept": "\\(A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}\\)에서 \\(ad-bc\\ne0\\)이면\n$$A^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$$ 이고, \\(AX=B\\)의 해는 \\(X=A^{-1}B\\)입니다. (왼쪽에 곱하는 순서 주의!)",
   "hints": [
    "\\(ad-bc=10-9=1\\). 대각선은 자리 바꾸고, 반대각선은 부호 바꾸기!",
    "\\(X=A^{-1}\\begin{pmatrix}1\\\\1\\end{pmatrix}\\)를 계산한 뒤, \\(AX\\)를 직접 곱해 검산하세요."
   ],
   "answerGuide": "예: A⁻¹ = (…), X = (…)"
  },
  {
   "no": 13,
   "unit": 2,
   "local": 3,
   "level": "하",
   "topic": "3차 행렬식",
   "ref": "p.77 · p.83 중단원 03 유형",
   "text": "다음 행렬식의 값을 구하시오. $$\\begin{vmatrix}1&2&0\\\\3&-1&2\\\\0&1&4\\end{vmatrix}$$",
   "concept": "3차 행렬식은 <b>사루스 법칙</b> 또는 <b>여인수 전개</b>로 구합니다. \\(0\\)이 많은 행이나 열로 전개하면 계산이 간단합니다.\n$$\\det A=a_{11}C_{11}+a_{12}C_{12}+a_{13}C_{13}\\quad(C_{ij}=(-1)^{i+j}M_{ij})$$",
   "hints": [
    "1행에 \\(0\\)이 있으니 1행으로 전개: \\(1\\begin{vmatrix}-1&2\\\\1&4\\end{vmatrix}-2\\begin{vmatrix}3&2\\\\0&4\\end{vmatrix}+0\\)",
    "\\(\\begin{vmatrix}-1&2\\\\1&4\\end{vmatrix}=-4-2\\), \\(\\begin{vmatrix}3&2\\\\0&4\\end{vmatrix}=12\\)"
   ],
   "answerGuide": "예: ? (정수 하나)"
  },
  {
   "no": 14,
   "unit": 2,
   "local": 4,
   "level": "하",
   "topic": "선형변환을 나타내는 행렬",
   "ref": "p.88 문제 4 유형",
   "text": "관계식 \\(x'=3x+y,\\ \\ y'=x-2y\\)로 정의된 선형변환 \\(f\\)에 대하여 다음을 구하시오.\n<ol class=\"sub\"><li>\\(f\\)를 나타내는 행렬</li><li>점 \\((2,\\,-1)\\)이 \\(f\\)에 의하여 옮겨지는 점</li><li>단위정사각형이 \\(f\\)에 의하여 옮겨진 도형의 넓이</li></ol>",
   "concept": "관계식 \\(x'=ax+by,\\ y'=cx+dy\\)의 선형변환은 행렬 \\(\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}\\)로 나타냅니다. (\\(\\vec e_1\\)이 간 곳이 1열, \\(\\vec e_2\\)가 간 곳이 2열)\n<br>선형변환은 넓이를 \\(|\\det A|\\)배 합니다.",
   "hints": [
    "계수를 그 자리 그대로: \\(\\begin{pmatrix}x'\\\\y'\\end{pmatrix}=\\begin{pmatrix}3&1\\\\1&-2\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}\\)",
    "(2) 행렬과 \\(\\begin{pmatrix}2\\\\-1\\end{pmatrix}\\)을 곱하세요. (3) \\(\\det=-6-1\\). 넓이는 절댓값!"
   ],
   "answerGuide": "예: (…), (…), 넓이 …"
  },
  {
   "no": 15,
   "unit": 2,
   "local": 5,
   "level": "하",
   "topic": "행렬식의 성질",
   "ref": "p.79 행렬의 곱과 행렬식 · p.80 예제 6 유형",
   "text": "3차 정사각행렬 \\(A,\\ B\\)에 대하여 \\(\\det A=2,\\ \\det B=-3\\)일 때, 다음 값을 구하시오.\n<ol class=\"sub\"><li>\\(\\det(AB)\\)</li><li>\\(\\det(2A)\\)</li><li>\\(\\det(A^{-1})\\)</li></ol>",
   "concept": "\\(n\\)차 정사각행렬 \\(A,\\ B\\)에 대하여\n$$\\det(AB)=\\det A\\cdot\\det B,\\qquad \\det(kA)=k^n\\det A,\\qquad \\det(A^{-1})=\\frac{1}{\\det A},\\qquad \\det(A^T)=\\det A$$\n\\(\\det(kA)\\)에서 \\(k\\)는 <b>행의 개수만큼</b> 곱해진다는 점에 주의하세요.",
   "hints": [
    "(1) \\(\\det(AB)=\\det A\\cdot\\det B\\)",
    "(2) 3차이므로 \\(\\det(2A)=2^3\\det A\\). (3) \\(AA^{-1}=I\\)의 양변에 행렬식을 취하면 \\(\\det A\\cdot\\det(A^{-1})=1\\)"
   ],
   "answerGuide": "예: (1) … (2) … (3) …"
  },
  {
   "no": 16,
   "unit": 2,
   "local": 6,
   "level": "하",
   "topic": "회전변환",
   "ref": "p.92 보기 · p.93 문제 5 유형",
   "text": "좌표평면 위의 점 \\(P(\\sqrt3,\\ 1)\\)을 원점을 중심으로 \\(\\dfrac{\\pi}{6}\\)만큼 반시계 방향으로 회전한 점의 좌표를 구하시오.",
   "concept": "원점을 중심으로 \\(\\theta\\)만큼 <b>반시계 방향</b>으로 회전하는 변환의 행렬은\n$$R_\\theta=\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\ \\sin\\theta&\\cos\\theta\\end{pmatrix}$$\n그림으로도 확인: 원점에서의 거리는 그대로, 방향만 \\(\\theta\\)만큼 돌아갑니다.",
   "hints": [
    "\\(R_{\\pi/6}=\\begin{pmatrix}\\frac{\\sqrt3}{2}&-\\frac12\\\\\\frac12&\\frac{\\sqrt3}{2}\\end{pmatrix}\\)에 \\(\\begin{pmatrix}\\sqrt3\\\\1\\end{pmatrix}\\)을 곱하세요.",
    "그림으로: \\(P\\)는 원점에서 거리 \\(2\\), 방향 \\(30^\\circ\\)인 점입니다. \\(30^\\circ\\)를 더 돌리면 \\(60^\\circ\\)!"
   ],
   "answerGuide": "예: (?, ?)"
  },
  {
   "no": 17,
   "unit": 2,
   "local": 7,
   "level": "중",
   "topic": "3×3 역행렬",
   "ref": "p.72 문제 2 유형",
   "text": "행렬 \\(A=\\begin{pmatrix}1&1&1\\\\0&1&2\\\\1&0&2\\end{pmatrix}\\)에 대하여 다음을 구하시오.\n<ol class=\"sub\"><li>\\(A^{-1}\\)</li><li>\\(AX=\\begin{pmatrix}3\\\\3\\\\3\\end{pmatrix}\\)을 만족시키는 \\(X\\)</li></ol>",
   "concept": "\\([A\\,|\\,I]\\)에 기본행연산을 하여 \\([I\\,|\\,A^{-1}]\\)로 만들거나, 수반행렬을 이용합니다.\n$$A^{-1}=\\frac{1}{\\det A}\\,\\mathrm{adj}(A)\\qquad(\\mathrm{adj}(A)=\\text{여인수행렬의 전치})$$\n구한 뒤 \\(AA^{-1}=I\\)로 검산하세요.",
   "hints": [
    "1열로 전개: \\(\\det A=1(2-0)-0+1(2-1)=3\\)이므로 역행렬이 존재합니다.",
    "여인수를 구해 전치하면 \\(\\mathrm{adj}(A)=\\begin{pmatrix}2&-2&1\\\\2&1&-2\\\\-1&1&1\\end{pmatrix}\\). (2)는 \\(X=A^{-1}B\\)"
   ],
   "answerGuide": "예: A⁻¹ = (…), X = (…)"
  },
  {
   "no": 18,
   "unit": 2,
   "local": 8,
   "level": "중",
   "topic": "합성변환",
   "ref": "p.95 예제 2 · p.101 중단원 03 유형",
   "text": "좌표평면에서 \\(f\\)는 \\(x\\)축에 대한 대칭변환, \\(g\\)는 원점을 중심으로 \\(\\dfrac{\\pi}{2}\\)만큼 반시계 방향으로 회전하는 회전변환이다. 다음을 구하시오.\n<ol class=\"sub\"><li>합성변환 \\(g\\circ f\\)를 나타내는 행렬</li><li>\\((g\\circ f)(2,\\,1)\\)과 \\((f\\circ g)(2,\\,1)\\)</li></ol>",
   "concept": "\\(f,\\ g\\)를 나타내는 행렬이 각각 \\(A,\\ B\\)이면 합성변환 \\(g\\circ f\\) (\\(f\\) 먼저)를 나타내는 행렬은 \\(BA\\)입니다.\n<br>일반적으로 \\(BA\\ne AB\\)이므로 <b>순서</b>가 중요합니다. 한 단계씩 점을 따라가며 검산하세요.",
   "hints": [
    "\\(f:\\ \\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}\\), \\(g:\\ \\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}\\). \\(g\\circ f\\)의 행렬은 \\(g\\)의 행렬 \\(\\times\\) \\(f\\)의 행렬",
    "한 단계씩: \\((2,1)\\xrightarrow{f}(2,-1)\\xrightarrow{g}\\ ?\\) / \\((2,1)\\xrightarrow{g}(-1,2)\\xrightarrow{f}\\ ?\\)"
   ],
   "answerGuide": "예: (…), (…), (…)"
  },
  {
   "no": 19,
   "unit": 2,
   "local": 9,
   "level": "중",
   "topic": "선형변환에 의한 직선의 이동",
   "ref": "p.98 예제 6 유형",
   "text": "행렬 \\(A=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}\\)로 나타내어지는 선형변환에 의하여 직선 \\(x+y-3=0\\)이 옮겨지는 도형의 방정식을 구하시오.",
   "concept": "도형을 옮기는 3단계\n<ul><li>① <b>되감기</b>: \\(\\begin{pmatrix}x\\\\y\\end{pmatrix}=A^{-1}\\begin{pmatrix}x'\\\\y'\\end{pmatrix}\\)</li><li>② <b>대입</b>: 원래 방정식에 넣기</li><li>③ <b>정리</b> 후 \\(x',\\ y'\\)을 \\(x,\\ y\\)로 바꿔 쓰기</li></ul>\n검산: 원래 직선 위의 점 하나를 옮긴 점이 새 직선 위에 있는지 확인!",
   "hints": [
    "\\(\\det A=1\\), \\(A^{-1}=\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}\\)이므로 \\(x=x'-y',\\ y=-x'+2y'\\)",
    "\\((x'-y')+(-x'+2y')-3=0\\)을 정리하세요. 검산: 점 \\((3,0)\\)을 옮기면 \\((6,3)\\)"
   ],
   "answerGuide": "예: 직선 ax + by + c = 0 꼴"
  },
  {
   "no": 20,
   "unit": 2,
   "local": 10,
   "level": "상",
   "topic": "역행렬이 없는 선형변환",
   "ref": "p.100 문제 8 유형",
   "text": "선형변환 \\(\\begin{pmatrix}x'\\\\y'\\end{pmatrix}=\\begin{pmatrix}2&-1\\\\-4&2\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}\\)에 의하여 다음 도형이 옮겨지는 도형을 구하시오.\n<ol class=\"sub\"><li>직선 \\(2x-y+3=0\\)</li><li>원 \\(x^2+y^2=5\\)</li></ol>",
   "concept": "\\(\\det A=0\\)이면 역행렬이 없고, 평면 전체가 <b>원점을 지나는 한 직선</b>으로 납작해집니다.\n<br>이때 직선은 <b>한 점</b> 또는 <b>원점을 지나는 직선</b>으로, 원은 <b>선분</b>으로 옮겨집니다.\n<br>코시–슈바르츠 부등식: \\(|ax+by|\\le\\sqrt{a^2+b^2}\\sqrt{x^2+y^2}\\)",
   "hints": [
    "\\(x'=2x-y\\), \\(y'=-4x+2y=-2(2x-y)=-2x'\\). 모든 상은 직선 \\(y=-2x\\) 위에 있습니다.",
    "(1) 직선 위에서 \\(2x-y\\)의 값은 항상 \\(-3\\)입니다. (2) 원 위에서 \\(|2x-y|\\le\\sqrt5\\cdot\\sqrt5\\)"
   ],
   "answerGuide": "예: (1) … (2) …"
  },
  {
   "no": 21,
   "unit": 3,
   "local": 1,
   "level": "하",
   "topic": "고윳값과 고유벡터",
   "ref": "p.111 문제 1 유형",
   "text": "행렬 \\(A=\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}\\)의 고윳값과 각 고윳값에 대응하는 고유벡터를 구하시오.",
   "concept": "<b>고윳값·고유벡터 구하는 2단계</b>\n<ul><li>① 특성방정식 \\(\\det(A-\\lambda I)=0\\)을 풀어 고윳값 \\(\\lambda\\)를 구한다.</li><li>② 각 \\(\\lambda\\)에 대해 \\((A-\\lambda I)\\vec v=\\vec 0\\)을 풀어 고유벡터 \\(\\vec v\\ (\\ne\\vec0)\\)를 구한다.</li></ul>\n2차이면 \\(\\det(A-\\lambda I)=\\lambda^2-(a+d)\\lambda+(ad-bc)\\)",
   "hints": [
    "\\(\\det(A-\\lambda I)=\\lambda^2-7\\lambda+10=(\\lambda-5)(\\lambda-2)\\)",
    "\\(\\lambda=5\\): \\(A-5I=\\begin{pmatrix}-1&1\\\\2&-2\\end{pmatrix}\\) → \\(x=y\\). \\(\\lambda=2\\): \\(A-2I=\\begin{pmatrix}2&1\\\\2&1\\end{pmatrix}\\) → \\(2x+y=0\\)"
   ],
   "answerGuide": "예: λ = ? → a(…), λ = ? → b(…)"
  },
  {
   "no": 22,
   "unit": 3,
   "local": 2,
   "level": "하",
   "topic": "고유벡터의 뜻",
   "ref": "p.109 고유벡터의 정의 유형",
   "text": "행렬 \\(A=\\begin{pmatrix}2&3\\\\4&1\\end{pmatrix}\\)에 대하여 다음 세 벡터 중 \\(A\\)의 고유벡터를 모두 고르고, 각각에 대응하는 고윳값을 구하시오.\n$$\\vec p=\\begin{pmatrix}1\\\\1\\end{pmatrix},\\qquad \\vec q=\\begin{pmatrix}3\\\\-4\\end{pmatrix},\\qquad \\vec r=\\begin{pmatrix}1\\\\2\\end{pmatrix}$$",
   "concept": "\\(A\\vec v=\\lambda\\vec v\\)를 만족시키는 실수 \\(\\lambda\\)와 \\(\\vec v\\ (\\ne\\vec 0)\\)가 있으면 \\(\\vec v\\)는 고유벡터, \\(\\lambda\\)는 고윳값입니다.\n<br>즉 \\(A\\vec v\\)를 직접 계산했을 때 <b>\\(\\vec v\\)의 실수배</b>가 나오는지만 확인하면 됩니다.",
   "hints": [
    "\\(A\\vec p=\\begin{pmatrix}2+3\\\\4+1\\end{pmatrix}=\\begin{pmatrix}5\\\\5\\end{pmatrix}\\). 이것은 \\(\\vec p\\)의 몇 배인가요?",
    "\\(A\\vec q=\\begin{pmatrix}6-12\\\\12-4\\end{pmatrix}\\), \\(A\\vec r=\\begin{pmatrix}8\\\\6\\end{pmatrix}\\)이 각각 \\(\\vec q,\\ \\vec r\\)의 실수배인지 확인하세요."
   ],
   "answerGuide": "예: p (고윳값 ?), …"
  },
  {
   "no": 23,
   "unit": 3,
   "local": 3,
   "level": "하",
   "topic": "케일리–해밀턴 정리",
   "ref": "p.117 예제 2 유형",
   "text": "행렬 \\(A=\\begin{pmatrix}2&3\\\\1&4\\end{pmatrix}\\)에 대하여 \\(A^2=pA+qI\\)가 성립할 때, 상수 \\(p,\\ q\\)의 값을 각각 구하시오.",
   "concept": "<b>케일리–해밀턴 정리</b>: 정사각행렬 \\(A\\)의 특성다항식 \\(p_A(\\lambda)\\)에 대하여 \\(p_A(A)=O\\).\n<br>2차 \\(A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}\\)이면\n$$A^2-(a+d)A+(ad-bc)I=O$$",
   "hints": [
    "\\(a+d=2+4\\), \\(ad-bc=8-3\\)을 계산하세요.",
    "\\(A^2-6A+5I=O\\)을 \\(A^2=\\square\\,A+\\square\\,I\\) 꼴로 이항하세요. (검산: \\(A^2\\)을 직접 곱해 보기)"
   ],
   "answerGuide": "예: p = ?, q = ?"
  },
  {
   "no": 24,
   "unit": 3,
   "local": 4,
   "level": "하",
   "topic": "2차 정사각행렬의 대각화",
   "ref": "p.125 문제 1 (1) 유형",
   "text": "행렬 \\(A=\\begin{pmatrix}5&-2\\\\1&2\\end{pmatrix}\\)에 대하여 \\(P^{-1}AP=D\\)가 대각행렬이 되도록 하는 가역행렬 \\(P\\)와 대각행렬 \\(D\\)를 각각 하나씩 구하시오.",
   "concept": "<b>대각화 4단계</b>: ① 고윳값 → ② 고유벡터 → ③ 고유벡터를 <b>열</b>로 세워 \\(P\\) → ④ 같은 순서로 고윳값을 대각선에 놓아 \\(D\\)\n<br>검산은 \\(P^{-1}\\)을 구하지 않고 \\(AP=PD\\)만 확인하면 충분합니다.",
   "hints": [
    "\\(\\lambda^2-7\\lambda+12=(\\lambda-3)(\\lambda-4)\\)",
    "\\(\\lambda=3\\): \\(2x-2y=0\\) → \\(\\begin{pmatrix}1\\\\1\\end{pmatrix}\\). \\(\\lambda=4\\): \\(x-2y=0\\) → \\(\\begin{pmatrix}2\\\\1\\end{pmatrix}\\). 이 두 벡터를 열로 세우세요."
   ],
   "answerGuide": "예: P = (…), D = (…)"
  },
  {
   "no": 25,
   "unit": 3,
   "local": 5,
   "level": "하",
   "topic": "대각화를 이용한 거듭제곱",
   "ref": "p.126 예제 2 (1) 유형",
   "text": "행렬 \\(A=\\begin{pmatrix}2&3\\\\0&-1\\end{pmatrix}\\)과 자연수 \\(n\\)에 대하여 행렬 \\(A^n\\)을 구하시오.",
   "concept": "\\(P^{-1}AP=D\\)이면 \\(A=PDP^{-1}\\)이고\n$$A^n=PD^nP^{-1}\\qquad\\left(\\begin{pmatrix}a&0\\\\0&b\\end{pmatrix}^n=\\begin{pmatrix}a^n&0\\\\0&b^n\\end{pmatrix}\\right)$$\n구한 뒤에는 \\(n=1\\)을 넣어 \\(A\\)가 나오는지 꼭 확인하세요.",
   "hints": [
    "위삼각행렬이므로 고윳값은 \\(2,\\ -1\\). \\(\\lambda=2\\)이면 \\(\\begin{pmatrix}1\\\\0\\end{pmatrix}\\), \\(\\lambda=-1\\)이면 \\(3x+3y=0\\)에서 \\(\\begin{pmatrix}1\\\\-1\\end{pmatrix}\\)",
    "\\(P=\\begin{pmatrix}1&1\\\\0&-1\\end{pmatrix}\\)이면 \\(P^{-1}=P\\) (자기 자신!). \\(A^n=P\\begin{pmatrix}2^n&0\\\\0&(-1)^n\\end{pmatrix}P\\)를 곱하세요."
   ],
   "answerGuide": "예: Aⁿ = (…)"
  },
  {
   "no": 26,
   "unit": 3,
   "local": 6,
   "level": "하",
   "topic": "직교행렬의 조건",
   "ref": "p.130 예제 3 · p.131 문제 3 유형",
   "text": "행렬 \\(A=\\begin{pmatrix}a&\\frac{5}{13}\\\\[2pt] b&\\frac{12}{13}\\end{pmatrix}\\)가 직교행렬이 되도록 하는 실수 \\(a,\\ b\\)의 순서쌍 \\((a,\\ b)\\)를 모두 구하시오.",
   "concept": "\\(A^TA=AA^T=I\\) (즉 \\(A^{-1}=A^T\\))인 행렬을 <b>직교행렬</b>이라 합니다.\n<br>\\(AA^T=I\\iff\\) 행벡터들이 <b>길이 1이고 서로 수직</b>(정규직교). \\(AA^T\\)를 곱해 \\(I\\)와 성분별로 비교하면 조건식이 나옵니다.",
   "hints": [
    "행벡터가 정규직교: \\(a^2+\\tfrac{25}{169}=1,\\quad b^2+\\tfrac{144}{169}=1,\\quad ab+\\tfrac{60}{169}=0\\)",
    "앞의 두 식에서 \\(a=\\pm\\tfrac{12}{13},\\ b=\\pm\\tfrac{5}{13}\\). 셋째 식에서 \\(ab<0\\)이므로 부호가 서로 <b>반대</b>입니다."
   ],
   "answerGuide": "예: (a, b) = (…), (…)"
  },
  {
   "no": 27,
   "unit": 3,
   "local": 7,
   "level": "중",
   "topic": "3차 행렬의 고윳값과 고유공간",
   "ref": "p.112 문제 2 · p.113 고유공간 유형",
   "text": "행렬 \\(A=\\begin{pmatrix}3&0&0\\\\0&1&2\\\\0&2&1\\end{pmatrix}\\)에 대하여 다음 물음에 답하시오.\n<ol class=\"sub\"><li>\\(A\\)의 고윳값을 모두 구하시오.</li><li>각 고윳값에 대응하는 고유공간 \\(E_A(\\lambda)\\)의 기저를 구하시오.</li></ol>",
   "concept": "고윳값 \\(\\lambda\\)에 대응하는 고유벡터 전체에 \\(\\vec0\\)을 더한 집합 \\(E_A(\\lambda)=\\{\\vec v\\mid A\\vec v=\\lambda\\vec v\\}\\)를 <b>고유공간</b>이라 합니다.\n<br>중근인 고윳값에는 일차독립인 고유벡터가 <b>2개</b> 있을 수도 있습니다. (조건식이 1개뿐이면 자유변수 2개)",
   "hints": [
    "1행으로 전개: \\(\\det(A-\\lambda I)=(3-\\lambda)\\{(1-\\lambda)^2-4\\}=-(\\lambda-3)^2(\\lambda+1)\\)",
    "\\(\\lambda=3\\): \\(A-3I=\\begin{pmatrix}0&0&0\\\\0&-2&2\\\\0&2&-2\\end{pmatrix}\\) → 조건은 \\(y=z\\) 하나뿐! (\\(x\\)는 자유) \\(\\lambda=-1\\): \\(x=0,\\ y+z=0\\)"
   ],
   "answerGuide": "예: (1) λ = … (2) E(λ)의 기저 {…}"
  },
  {
   "no": 28,
   "unit": 3,
   "local": 8,
   "level": "중",
   "topic": "대각화로 Aⁿ 구하기",
   "ref": "p.127 문제 2 (1) 유형",
   "text": "행렬 \\(A=\\begin{pmatrix}3&-1\\\\2&0\\end{pmatrix}\\)과 자연수 \\(n\\)에 대하여 행렬 \\(A^n\\)을 구하시오.",
   "concept": "<b>3단계</b>: ① 대각화(\\(P,\\ D\\)) → ② \\(P^{-1}\\) 구하기 → ③ \\(A^n=PD^nP^{-1}\\)\n<br>2차 역행렬: \\(\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}^{-1}=\\dfrac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}\\)\n<br>검산 2종: \\(n=1\\)이면 \\(A\\), \\(n=0\\)이면 \\(I\\)가 나와야 합니다.",
   "hints": [
    "\\(\\lambda^2-3\\lambda+2=(\\lambda-1)(\\lambda-2)\\). \\(\\lambda=1\\): \\(2x-y=0\\) → \\(\\begin{pmatrix}1\\\\2\\end{pmatrix}\\), \\(\\lambda=2\\): \\(x-y=0\\) → \\(\\begin{pmatrix}1\\\\1\\end{pmatrix}\\)",
    "\\(P=\\begin{pmatrix}1&1\\\\2&1\\end{pmatrix}\\), \\(P^{-1}=\\begin{pmatrix}-1&1\\\\2&-1\\end{pmatrix}\\). 먼저 \\(PD^n=\\begin{pmatrix}1&2^n\\\\2&2^n\\end{pmatrix}\\)을 계산한 뒤 \\(P^{-1}\\)을 오른쪽에 곱하세요."
   ],
   "answerGuide": "예: Aⁿ = (…)"
  },
  {
   "no": 29,
   "unit": 3,
   "local": 9,
   "level": "중",
   "topic": "2차 대칭행렬의 직교대각화",
   "ref": "p.132 예제 4 · p.133 문제 4 유형",
   "text": "대칭행렬 \\(A=\\begin{pmatrix}3&-1\\\\-1&3\\end{pmatrix}\\)에 대하여 \\(P^TAP=D\\)가 대각행렬이 되도록 하는 직교행렬 \\(P\\)와 대각행렬 \\(D\\)를 구하시오.",
   "concept": "<b>스펙트럼 정리</b>: 대칭행렬은 항상 직교대각화 가능합니다.\n<br>서로 다른 고윳값의 고유벡터는 자동으로 <b>수직</b> → 각각을 <b>길이 1로 정규화</b>해서 열로 세우면 \\(P\\)는 직교행렬(\\(P^{-1}=P^T\\))이고 \\(P^TAP=D\\)\n<br>검산: \\(P^TP=I\\)",
   "hints": [
    "\\(\\lambda^2-6\\lambda+8=(\\lambda-2)(\\lambda-4)\\). \\(\\lambda=2\\): \\(x-y=0\\) → \\(\\begin{pmatrix}1\\\\1\\end{pmatrix}\\), \\(\\lambda=4\\): \\(-x-y=0\\) → \\(\\begin{pmatrix}-1\\\\1\\end{pmatrix}\\)",
    "두 벡터의 길이는 모두 \\(\\sqrt2\\)입니다. \\(\\sqrt2\\)로 나누어 열로 세우세요."
   ],
   "answerGuide": "예: P = (…), D = (…)"
  },
  {
   "no": 30,
   "unit": 3,
   "local": 10,
   "level": "상",
   "topic": "중근이 있는 3차 행렬의 직교대각화",
   "ref": "p.133 예제 5 · 문제 5 유형",
   "text": "대칭행렬 \\(A=\\begin{pmatrix}1&1&1\\\\1&1&1\\\\1&1&1\\end{pmatrix}\\)에 대하여 \\(P^TAP=D\\)가 대각행렬이 되도록 하는 직교행렬 \\(P\\)와 대각행렬 \\(D\\)를 구하시오.",
   "concept": "<b>직교대각화 4단계</b>\n<ul><li>① 고윳값 → ② 고유벡터</li><li>③ <b>중근인 고윳값</b>에서 나온 두 고유벡터는 그람–슈미트로 서로 수직이 되게 고친다.\n$$\\vec w_2=\\vec v_2-\\frac{\\vec v_2\\cdot\\vec v_1}{\\vec v_1\\cdot\\vec v_1}\\vec v_1$$</li><li>④ 모든 벡터를 길이 1로 정규화하여 열로 세운다.</li></ul>",
   "hints": [
    "\\(\\det(A-\\lambda I)=-\\lambda^2(\\lambda-3)\\). \\(\\lambda=0\\): \\(x+y+z=0\\) → \\(\\vec v_1=\\begin{pmatrix}-1\\\\1\\\\0\\end{pmatrix},\\ \\vec v_2=\\begin{pmatrix}-1\\\\0\\\\1\\end{pmatrix}\\) (내적 \\(1\\), 수직 아님!)",
    "\\(\\vec w_2=\\vec v_2-\\frac12\\vec v_1\\) → 2배 하여 \\(\\begin{pmatrix}-1\\\\-1\\\\2\\end{pmatrix}\\). \\(\\lambda=3\\): \\(\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}\\). 길이 \\(\\sqrt2,\\ \\sqrt6,\\ \\sqrt3\\)으로 나누세요."
   ],
   "answerGuide": "예: P = (…), D = diag(…)"
  }
 ]
};
