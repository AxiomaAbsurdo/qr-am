import React from "react";

import { DockIcon } from "../src/@/components/magicui/dock";
import { Dock } from "../src/@/components/magicui/dock";
export type IconProps = React.HTMLAttributes<SVGElement>;

export function LinkHub() {
  return (
    <div className="relative">
      <Dock className="dock-horizontal">
        {/* GitHub */}
        <DockIcon className="size-6">
          <div className="tooltip" data-tooltip="GitHub">
            <Icons.gitHub className="dock-icon" />
          </div>
        </DockIcon>
        {/* LinkedIn */}
        <DockIcon>
          <div className="tooltip" data-tooltip="LinkedIn">
            <Icons.linkedin className="dock-icon" />
          </div>
        </DockIcon>
        {/* WhatsApp */}
        <DockIcon>
          <div className="tooltip" data-tooltip="WhatsApp">
            <Icons.whatsapp className="dock-icon" />
          </div>
        </DockIcon>
        {/* Calendly */}
        <DockIcon>
          <div className="tooltip" data-tooltip="Calendly">
            <Icons.calendly className="dock-icon" />
          </div>
        </DockIcon>
        {/* LTF */}
        <DockIcon>
          <div className="tooltip" data-tooltip="LTF">
            <Icons.ltf className="dock-icon" />
          </div>
        </DockIcon>
        {/* HomeSite */}
        <DockIcon>
          <div className="tooltip" data-tooltip="Personal Site">
            <Icons.homesite className="dock-icon" />
          </div>
        </DockIcon>
      </Dock>
    </div>
  );
}

const IconWrapper = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }}>
    {children}
  </a>
);

const iconStyle = {
  width: 35,
  height: 35,
};

const Icons = {
  gitHub: (props: IconProps) => (
    <IconWrapper href="https://github.com/adryvm">
      <svg viewBox="0 0 438.549 438.549" {...props} style={iconStyle}>
        <path
          fill="currentColor"
          d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
        />
      </svg>
    </IconWrapper>
  ),
  linkedin: (props: IconProps) => (
    <IconWrapper href="https://www.linkedin.com/in/avmartinez/">
      <svg viewBox="0 0 24 24" {...props} style={iconStyle}>
        <path
          fill="currentColor"
          d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.73V1.73C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.552a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM20.452 20.452h-3.56v-5.87c0-1.399-.028-3.198-1.95-3.198-1.951 0-2.25 1.523-2.25 3.094v5.974h-3.56V9h3.42v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.605 0 4.269 2.372 4.269 5.456v6.285h-.002z"
        />
      </svg>
    </IconWrapper>
  ),
  whatsapp: (props: IconProps) => (
    <IconWrapper href="https://api.whatsapp.com/send/?phone=59891309322&text&type=phone_number&app_absent=0">
      <svg viewBox="0 0 24 24" {...props} style={iconStyle}>
        <path
          fill="currentColor"
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.149-.67.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.298-.018-.459.13-.608.134-.133.297-.347.446-.52.149-.173.198-.298.297-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.208-.241-.579-.487-.502-.67-.512-.173-.007-.372-.009-.571-.009s-.52.075-.792.372c-.272.297-1.038 1.014-1.038 2.48 0 1.466 1.064 2.883 1.213 3.082.149.198 2.096 3.2 5.08 4.487.711.307 1.264.489 1.695.626.713.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.472 7.618c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18.08c-4.455 0-8.08 3.625-8.08 8.08 0 1.423.373 2.83 1.083 4.06L4 20l3.642-.952c1.214.656 2.582.992 3.958.992 4.455 0 8.08-3.625 8.08-8.08s-3.625-8.08-8.08-8.08z"
        />
      </svg>
    </IconWrapper>
  ),
  calendly: (props: IconProps) => (
    <IconWrapper href="https://calendly.com/community_am">
      <svg viewBox="0 0 24 24" {...props} style={iconStyle}>
        <path
          fill="currentColor"
          d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM5 18V7H19V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z"
        />
        <path
          d="M15 17C16.1046 17 17 16.1046 17 15C17 13.8954 16.1046 13 15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM5 18V7H19V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z"
          fill="currentColor"
        />
      </svg>
    </IconWrapper>
  ),
  ltf: (props: IconProps) => (
    <IconWrapper href="https://www.latamtechfactory.com/">
      <svg viewBox="0 0 24 24" {...props} style={iconStyle}>
        <path
          d="M4 8C4.55228 8 5 7.55228 5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8Z"
          fill="currentColor"
        />
        <path
          d="M8 7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6C7.55228 6 8 6.44772 8 7Z"
          fill="currentColor"
        />
        <path
          d="M10 8C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6C9.44771 6 9 6.44772 9 7C9 7.55228 9.44771 8 10 8Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM21 5H3C2.44772 5 2 5.44772 2 6V9H22V6C22 5.44772 21.5523 5 21 5ZM2 18V11H22V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18Z"
          fill="currentColor"
        />
      </svg>
    </IconWrapper>
  ),
  homesite: (props: IconProps) => (
    <IconWrapper href="https://www.instagram.com/community_am?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
      <svg viewBox="0 0 24 24" {...props} style={iconStyle}>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
          fill="currentColor"
        />
        <path
          d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
          fill="currentColor"
        />
      </svg>
    </IconWrapper>
  ),
}

