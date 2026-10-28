export const TIERS = [
  { min: 0, max: 3000, identity: '佃户／短工', grade: '平民', stipend: '无（平民）', verdict: '地是东家的，收成要交租，唯一归你的是望不到头的疲惫。', image: './assets/results/01.jpg' },
  { min: 3000, max: 4000, identity: '自耕农', grade: '平民', stipend: '无（平民）', verdict: '田不多，活不少；一年到头最稳定的收入，是心酸背痛。', image: './assets/results/02.jpg' },
  { min: 4000, max: 5000, identity: '手艺人／小商贩', grade: '平民', stipend: '无（平民）', verdict: '手艺养家，熟客赊账；你在街坊有名，主要因为账本记得清。', image: './assets/results/03.jpg' },
  { min: 5000, max: 5500, identity: '衙门末等小官', grade: '从九品', stipend: '60石', verdict: '你在大明当官，最大的权力是决定今天先被谁使唤。', image: './assets/results/04.jpg' },
  { min: 5500, max: 6000, identity: '县衙主簿', grade: '正九品', stipend: '66石', verdict: '公文是你写的，功劳是上司的，出了错——终于有机会证明你存在了。', image: './assets/results/05.jpg' },
  { min: 6000, max: 7000, identity: '县衙佐官', grade: '从八品', stipend: '72石', verdict: '你不是没前途，只是前途目前还没发现你。', image: './assets/results/06.jpg' },
  { min: 7000, max: 8000, identity: '县丞', grade: '正八品', stipend: '78石', verdict: '知县的副手。正经事你干，露脸的事他干。', image: './assets/results/07.jpg' },
  { min: 8000, max: 9000, identity: '京衙属官', grade: '从七品', stipend: '84石', verdict: '你终于进京了。俸禄没涨多少，见过的达官贵人倒是更会画饼了。', image: './assets/results/08.jpg' },
  { min: 9000, max: 10000, identity: '知县', grade: '正七品', stipend: '90石', verdict: '一县父母官，管得了百姓，管不了上司一句“这个今晚要”。', image: './assets/results/09.jpg' },
  { min: 10000, max: 12000, identity: '京官佐贰', grade: '从六品', stipend: '96石', verdict: '你开始参加核心会议了，主要负责坐在核心位置上听别人给你加活。', image: './assets/results/10.jpg' },
  { min: 12000, max: 15000, identity: '通判／部司主事', grade: '正六品', stipend: '120石', verdict: '手里有点权，背上全是锅。你不是中层，你是锅的承重结构。', image: './assets/results/11.jpg' },
  { min: 15000, max: 18000, identity: '员外郎', grade: '从五品', stipend: '168石', verdict: '京城里总算有人认识你了——毕竟好用的人，谁不想多用几次？', image: './assets/results/12.jpg' },
  { min: 18000, max: 22000, identity: '郎中', grade: '正五品', stipend: '192石', verdict: '部门没你不行。你要真信了，说明你已经很适合继续留下来加班。', image: './assets/results/13.jpg' },
  { min: 22000, max: 27000, identity: '布政司参议等', grade: '从四品', stipend: '252石', verdict: '你参与一省大事，自己的大事是月底对着各路开销后的余额别叹气太大声。', image: './assets/results/14.jpg' },
  { min: 27000, max: 33000, identity: '知府', grade: '正四品', stipend: '288石', verdict: '知府大人，辖区归你管；至于你本人，归上峰、同僚和公文轮流管。', image: './assets/results/15.jpg' },
  { min: 33000, max: 40000, identity: '布政司参政等', grade: '从三品', stipend: '312石', verdict: '你说话终于有人记了。不是重视你，是怕你说过什么以后不认账。', image: './assets/results/16.jpg' },
  { min: 40000, max: 50000, identity: '侍郎／按察使', grade: '正三品', stipend: '420石', verdict: '你已是朝中实权人物，府门一开，等着结交你的人排到街口。', image: './assets/results/17.jpg' },
  { min: 50000, max: 55000, identity: '布政使', grade: '从二品', stipend: '576石', verdict: '你坐镇一省，出门有仪从，回府有管家，赴宴还有人替你留上座。', image: './assets/results/18.jpg' },
  { min: 55000, max: 60000, identity: '六部尚书', grade: '正二品', stipend: '732石', verdict: '满朝大事等你拍板，京城宴席等你赴约，你点点头，便有人替你办妥。', image: './assets/results/19.jpg' },
  { min: 60000, max: 70000, identity: '朝廷重臣', grade: '从一品', stipend: '888石', verdict: '你是皇帝倚重的重臣，想见你的人先递帖子，想攀交情的还得排队。', image: './assets/results/20.jpg' },
  { min: 70000, max: Infinity, identity: '一品大员', grade: '正一品', stipend: '1,044石', verdict: '你站在大明权势之巅，朱门车马、宾客盈门，连机会都得等你点头。', image: './assets/results/21.jpg' },
];

export function findTier(monthlySalary) {
  let amount;
  if (typeof monthlySalary === 'number') {
    amount = monthlySalary;
  } else if (typeof monthlySalary === 'string') {
    const input = monthlySalary.trim();
    if (!/^(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(input)) return null;
    amount = Number(input.replaceAll(',', ''));
  } else {
    return null;
  }

  if (!Number.isFinite(amount) || amount < 0) return null;
  return TIERS.find((tier) => amount >= tier.min && amount < tier.max) ?? null;
}

if (typeof document !== 'undefined') {
  const form = document.querySelector('#salary-form');
  if (form) {
    const input = document.querySelector('#salary');
    const error = document.querySelector('#salary-error');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const tier = findTier(input.value);
      if (!tier) {
        error.textContent = '请输入有效的非负月薪，例如：12,000';
        input.setAttribute('aria-invalid', 'true');
        input.focus();
        return;
      }

      error.textContent = '';
      input.removeAttribute('aria-invalid');
      const tierIndex = TIERS.indexOf(tier);
      window.location.assign(`./result.html?tier=${tierIndex}`);
    });

    input.addEventListener('input', () => {
      if (error.textContent) {
        error.textContent = '';
        input.removeAttribute('aria-invalid');
      }
    });
  }
}
