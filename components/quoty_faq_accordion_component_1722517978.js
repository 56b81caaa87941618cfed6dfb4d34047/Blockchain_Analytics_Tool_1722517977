/* Summary: Contains a section with:
1. Accordion title: An h2 element that displays the title of the FAQ section, styled for font size, weight, and margin.
2. Accordion container: A div element that holds multiple accordion items, styled with vertical spacing. Each item has a visible question. When the + icon on the right is clicked, it expands to show the answer for that question.
*/

Vue.component("quoty_faq_accordion_component_1722517978", {
    template: `
    <section class="py-8 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 pl-4 relative overflow-hidden">
        <div class="absolute inset-0 backdrop-blur-md bg-white/20"></div>
        <div class="relative z-10">
            <h2 class="text-2xl font-bold mb-5 text-white drop-shadow-lg">Frequently Asked Questions About Our Blockchain Analytics App</h2>
            <!-- Accordion -->
            <div class="space-y-4">
                <!-- Accordion item -->
                <div v-for="(term, index) in terms" :key="index" class="text-sm rounded-xl overflow-hidden backdrop-blur-lg bg-white/30 shadow-lg transition-all duration-300" :class="[{ 'expanded': term.expanded }]">
                    <h3>
                        <button type="button" class="flex items-center justify-between w-full text-left font-medium px-6 py-4 text-white hover:bg-white/10 transition-colors duration-200" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                            <span class="text-lg">{{ term.title }}</span>
                            <svg class="shrink-0 ml-8 fill-white" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <rect y="7" width="16" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                                <rect y="7" width="16" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                            </svg>
                        </button>
                    </h3>
                    <div :id="'terms-text-' + index" role="region" :aria-labelledby="'terms-title-' + index" class="text-white grid overflow-hidden transition-all duration-300 ease-in-out" :class="[{ 'grid-rows-1fr opacity-100': term.expanded, 'grid-rows-0fr opacity-0': !term.expanded }]">
                        <div class="overflow-hidden" :id="'terms-text-' + index + '-content'">
                            <p class="px-6 pb-4" :id="'terms-text-' + index + '-description'">
                                {{ term.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            terms: [
                { title: "What is blockchain analytics?", description: "Blockchain analytics involves analyzing data from blockchain networks to derive insights about transactions, addresses, smart contracts and more. Our app provides powerful tools to explore and monitor blockchain activity.", expanded: false },
                { title: "What blockchains does your app support?", description: "We currently support analysis of Bitcoin, Ethereum, and several other major blockchain networks. Our roadmap includes expanding to additional chains based on user demand.", expanded: false },
                { title: "What kind of analytics can I perform?", description: "You can track transactions, monitor addresses and wallets, analyze smart contract activity, visualize network statistics, and much more. Our app provides a comprehensive suite of on-chain analytics capabilities.", expanded: false },
                { title: "Is my blockchain data kept private?", description: "Yes, all of your blockchain data and analysis is kept completely private and secure within our encrypted app environment. We never share or sell user information.", expanded: false },
            ],
        };
    },
    methods: {
        toggle(index) {
            this.terms[index].expanded = !this.terms[index].expanded;
        },
    },
});
