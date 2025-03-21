import { FC, useMemo } from "react";

import { Outlet, useLocation } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

const Tutoring: FC = () => {
  const { pathname } = useLocation();
  const components = useMemo(
    () => pathname.split("/").filter(Boolean),
    [pathname]
  );

  const prettifyPath = (path: string) => {
    return path
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="m-8">
      <Breadcrumb className="py-4">
        <BreadcrumbList>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          {components.map((component, index) => (
            <>
              <BreadcrumbItem key={component}>
                <BreadcrumbLink
                  href={`/${components.slice(0, index + 1).join("/")}`}
                >
                  {prettifyPath(component)}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < components.length - 1 && (
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              )}
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <Outlet />
    </div>
  );
};

export default Tutoring;
