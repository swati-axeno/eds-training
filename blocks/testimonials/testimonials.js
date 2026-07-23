export default function decorate(block) {

  const testimonials = block.querySelectorAll(':scope > div');

  testimonials.forEach((testimonial) => {

    testimonial.classList.add('testimonial-card');

    const items = [...testimonial.children];

    const classes = [
      'testimonial-image',
      'testimonial-name',
      'testimonial-role',
      'testimonial-rating',
      'testimonial-review'
    ];

    items.forEach((item, index) => {
      if (classes[index]) {
        item.classList.add(classes[index]);
      }
    });

  });

}