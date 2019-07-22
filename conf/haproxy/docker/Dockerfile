FROM haproxy:2.0.2

RUN if grep -q haproxy /etc/group; then echo "group exists"; else groupadd haproxy && useradd -g haproxy haproxy; fi

# Create a system group and user to be used by HAProxy.
# RUN groupadd haproxy && useradd -g haproxy haproxy

# Need to create a directory for HAProxy to be able to `chroot`.
# This is a security measurement.
# Refer to http://cbonte.github.io/haproxy-dconv/configuration-1.5.html#chroot.
# RUN mkdir /usr/local/etc/haproxy

# Now copy the configurations file applicable for NELO2.
# COPY config/haproxy.cfg /usr/local/etc/haproxy/haproxy.cfg
