<template>
  <div>
    <div v-for="(content, i) in contents" :key="i">
      <ServiceComp :service="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GsapTestPage',
  data() {
    return {
      contents: [
        {
          id: 'UIX',
          scroll: 'UIXscroll',
          title: 'UI/UX Design',
          content:
            'Our UI/UX Design team creates an interactive prototype of your application through a five-step process that repeats itself until we achieve perfection. We work on softwares like Adobe XD, FIGMA and with Design Systems like Material Design (Google), Fluent (Microsoft), HIG (Apple) to design applications that seamlessly adapt to your target platform.',
          details: [
            {
              title: 'Product Research',
            },
            {
              title: 'User Analysis',
            },
            {
              title: 'Prototype Design',
            },
            {
              title: 'Prototype Validation',
            },
          ],
        },
        {
          id: 'PWA',
          scroll: 'PWAScroll',
          title: 'PWA Websites',
          content:
            'Progressive Web Apps(PWA) are suitable for applications aiming to co-exist on the web and native platforms like Android, Windows, and iOS. Applications may vary from simple systems like portfolios, blogs to more complex systems like social media, online stores, eCommerce, CMS, video conferencing, etc. We listed some of the tech stacks used in our applications below.',
          details: [
            {
              title: 'MERN (React JS)',
            },
            {
              title: 'MEVN (Vue JS)',
            },
            {
              title: 'JAMSTACK (API)',
            },
            {
              title: 'Python (Django)',
            },
          ],
        },
        {
          id: 'ERP',
          scroll: 'ERPScroll',
          title: 'Enterprise Resource Planning',
          content:
            'Applications to manage, regulate or automate at various levels of the business process and after-sales. As modern enterprises have become more complex with more problems and people to deal with, it is important to integrate the latest technologies into the system in order to optimize the business at every level.',
          details: [
            {
              title: 'Accounting and Financial Management (AFM)',
            },
            {
              title: 'Customer Relationship Management (CRM)',
            },
            {
              title: 'Supplier Relationship Management (SRM)',
            },
            {
              title: 'Business Intelligence (BI)',
            },
            {
              title: 'Human Resources (HR)',
            },
            {
              title: 'Product Lifecycle Management (PLM)',
            },
            {
              title: 'Supply Chain Management (SCM)',
            },
          ],
        },
        {
          id: 'AI',
          scroll: 'AIScroll',
          title: 'AI Based Solutions',
          content:
            'We use Artificial Intelligence (AI) and Machine Learning (ML) to automate repetitive tasks, better organize business processes, and build a personalized customer experience. Get that edge in innovation to differentiate from the competition. Proven solutions to boost sales through customer engagement, AI assisted search, and feedback analysis. We work on technologies like PyTorch, Tensorflow to build neural networks.',
          details: [
            {
              title: 'AI Chatbot',
            },
            {
              title: 'Voice Search',
            },
            {
              title: 'Image Search',
            },
            {
              title: 'Customer Behavior Analysis',
            },
            {
              title: 'Customer Feedback Analysis (NLP)',
            },
          ],
        },
      ],
    }
  },
}
</script>
