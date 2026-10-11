import { siteContent } from '@/content/site';

export default function ContactPage() {
  const { contact } = siteContent;

  return (
    <section className="contact">
      <h1 className="page__title">{contact.title}</h1>
      <p className="page__lead">{contact.lead}</p>
      <ul className="contact__actions">
        {contact.actions.map(action => (
          <li key={action.label}>
            <a href={action.href} className="button button--default button--lg">
              {action.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
